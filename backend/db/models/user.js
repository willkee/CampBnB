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
		static async login({ email, password }) {
			const { Op } = require("sequelize");
			const user = await User.scope("loginUser").findOne({
				where: { email },
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
			User.hasMany(models.Spot, { foreignKey: "ownerId" });
			User.hasMany(models.Booking, { foreignKey: "userId" });
		}
	}
	User.init(
		{
			firstName: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: {
						args: [1, 50],
						msg: "Please enter a first name between 1 and 50 characters.",
					},
				},
			},
			lastName: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: {
						args: [1, 50],
						msg: "Please enter a last name between 1 and 50 characters.",
					},
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
					len: {
						args: [3, 255],
						msg: "Please enter an email between 3 and 255 characters.",
					},
					isEmail: true,
				},
			},
			hashedPassword: {
				type: DataTypes.STRING.BINARY,
				allowNull: false,
				validate: {
					len: {
						args: [60, 60],
						msg: "Error in hashing password.",
					},
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
