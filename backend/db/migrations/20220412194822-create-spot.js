"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Spots", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			ownerId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "Users" },
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING(255),
			},
			address: {
				type: Sequelize.STRING(255),
			},
			city: {
				allowNull: false,
				type: Sequelize.STRING(255),
			},
			lat: {
				type: Sequelize.DECIMAL(10, 6),
			},
			long: {
				type: Sequelize.DECIMAL(10, 6),
			},
			imageUrl: {
				allowNull: false,
				type: Sequelize.STRING(2048),
			},
			type: {
				allowNull: false,
				type: Sequelize.STRING(50),
			},
			price: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			description: {
				type: Sequelize.TEXT,
			},
			capacity: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			open: {
				allowNull: false,
				type: Sequelize.BOOLEAN,
				defaultValue: true,
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
		await queryInterface.dropTable("Spots");
	},
};
