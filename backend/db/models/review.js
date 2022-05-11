"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Review extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Review.belongsTo(models.User, { foreignKey: "userId" });
			Review.belongsTo(models.Spot, { foreignKey: "spotId" });
		}
	}
	Review.init(
		{
			spotId: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			userId: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			rating: {
				allowNull: false,
				type: DataTypes.INTEGER,
				validate: {
					min: {
						args: 1,
						msg: "Please enter a valid rating.",
					},
					max: {
						args: 5,
						msg: "Please enter a valid rating.",
					},
				},
			},
			content: {
				allowNull: false,
				type: DataTypes.TEXT,
			},
		},
		{
			sequelize,
			modelName: "Review",
		}
	);
	return Review;
};
