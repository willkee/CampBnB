"use strict";
const { Model, Validator } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		toSafeObject() {
			const { id, firstName, lastName, email } = this; // context will be the User instance
			return { id, firstName, lastName, email };
		}
		validatePassword(password) {
			return bcrypt.compareSync(password, this.hashedPassword.toString());
		}
		static async getCurrentUserById(id) {
			return await User.scope("currentUser").findByPk(id);
		}
		static async login({ credential, password }) {
			const { Op } = require("sequelize");
			const user = await User.scope("loginUser").findOne({
				where: { email: credential },
			});
			if (user && user.validatePassword(password)) {
				return await User.scope("currentUser").findByPk(user.id);
			}
		}
		static async signup({ firstName, lastName, email, password }) {
			const hashedPassword = bcrypt.hashSync(password);
			const user = await User.create({
				firstName,
				lastName,
				email,
				hashedPassword,
			});
			return await User.scope("currentUser").findByPk(user.id);
		}
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			firstName: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1, 50],
				},
			},
			lastName: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1, 50],
				},
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: {
					args: true,
					msg: "That email address already exists. Login instead?",
				},
				validate: {
					len: [3, 255],
					isEmail: true,
				},
			},
			hashedPassword: {
				type: DataTypes.STRING.BINARY,
				allowNull: false,
				validate: {
					len: [60, 60],
				},
			},
		},
		{
			sequelize,
			modelName: "User",
			defaultScope: {
				attributes: {
					exclude: [
						"hashedPassword",
						"email",
						"createdAt",
						"updatedAt",
					],
				},
			},
			scopes: {
				currentUser: {
					attributes: { exclude: ["hashedPassword"] },
				},
				loginUser: {
					attributes: {},
				},
			},
		}
	);
	return User;
};
