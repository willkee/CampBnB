"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Booking extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Booking.belongsTo(models.Spot, { foreignKey: "spotId" });
			Booking.belongsTo(models.User, { foreignKey: "userId" });
		}
	}
	Booking.init(
		{
			spotId: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			userId: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			startDate: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			endDate: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			people: {
				allowNull: false,
				type: DataTypes.INTEGER,
				validate: {
					min: {
						args: 1,
						msg: "Please enter at least one person.",
					},
				},
			},
		},
		{
			sequelize,
			modelName: "Booking",
		}
	);
	return Booking;
};
