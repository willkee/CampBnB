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
			Spot.hasMany(models.Booking, { foreignKey: "spotId" });
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
					max: 255,
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
					len: [3, 2048],
				},
			},
			type: {
				allowNull: false,
				type: DataTypes.STRING,
				validate: {
					len: [1, 60],
				},
			},
			price: {
				allowNull: false,
				type: DataTypes.INTEGER,
				validate: {
					min: 0,
					max: 1000,
				},
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
