"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Users",
			[
				{
					firstName: "Demo",
					lastName: "User",
					email: "demo@user.io",
					hashedPassword: bcrypt.hashSync("password"),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		const Op = Sequelize.Op;
		return queryInterface.bulkDelete("Users", null, {});
	},
};
