"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Reviews", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			spotId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "Spots" },
				onDelete: "CASCADE",
			},
			userId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "Users" },
			},
			rating: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			content: {
				allowNull: false,
				type: Sequelize.TEXT,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: new Date(),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: new Date(),
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Reviews");
	},
};
