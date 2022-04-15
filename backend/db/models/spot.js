"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Spot extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */

		static associate(models) {
			// define association here
			Spot.belongsTo(models.User, { foreignKey: "ownerId" });
			Spot.hasMany(models.Booking, {
				foreignKey: "spotId",
				onDelete: "CASCADE",
				hooks: "true",
			});
		}
	}
	Spot.init(
		{
			ownerId: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			name: {
				allowNull: false,
				type: DataTypes.STRING,
				validate: {
					len: [1, 255],
				},
			},
			address: {
				type: DataTypes.STRING,
				validate: {
					len: {
						args: [0, 255],
						msg: "Please enter a street address less than 255 characters.",
					},
				},
			},
			city: {
				allowNull: false,
				type: DataTypes.STRING,
				validate: {
					len: [1, 255],
				},
			},
			lat: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				validate: {
					max: {
						args: 41.0,
						msg: "Please enter a valid latitude within the State of Colorado",
					},
					min: {
						args: 37.0,
						msg: "Please enter a valid latitude within the State of Colorado",
					},
				},
			},
			long: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				validate: {
					max: {
						args: -102.0,
						msg: "Please enter a valid longitude within the State of Colorado",
					},
					min: {
						args: -109.0,
						msg: "Please enter a valid longitude within the State of Colorado",
					},
				},
			},
			imageUrl: {
				allowNull: false,
				type: DataTypes.STRING,
				validate: {
					len: {
						args: [3, 2048],
						msg: "Please enter an image URL between 3 and 2048 characters.",
					},
				},
			},
			type: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			price: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			description: {
				type: DataTypes.TEXT,
			},
			capacity: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			open: {
				allowNull: false,
				type: DataTypes.BOOLEAN,
				defaultValue: true,
			},
		},
		{
			sequelize,
			modelName: "Spot",
		}
	);
	return Spot;
};
