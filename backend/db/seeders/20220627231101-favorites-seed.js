"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Favorites",
			[
				{
					userId: 1,
					spotId: 1,
				},
				{
					userId: 1,
					spotId: 3,
				},
				{
					userId: 1,
					spotId: 5,
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Favorites", null, {});
	},
};
