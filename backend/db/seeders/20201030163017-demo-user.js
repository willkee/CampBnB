"use strict";
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
					firstName: "Ashly",
					lastName: "Kuhn",
					email: "Jamal_Pagac15@yahoo.com",
					hashedPassword:
						"$2a$10$u8EGn2qfgftmBygTmMPfGOQ2p50C099i.c/oXkv/yzaJtQYw3OExW",
				},
				{
					firstName: "Rene",
					lastName: "Stiedemann",
					email: "Lilly52@yahoo.com",
					hashedPassword:
						"$2a$10$gbsd/zdccfZ.RjLxkSzGSOEz/QC0LYYzStVkmazwne48.RbfvLn3S",
				},
				{
					firstName: "Eldora",
					lastName: "Rice",
					email: "Dalton44@hotmail.com",
					hashedPassword:
						"$2a$10$jmnKxkgicM9nWOPwN7hPieofiDZ2lRxn7jZP95Ua97GA9B6KBHxmC",
				},
				{
					firstName: "Orlo",
					lastName: "Morissette",
					email: "Miller.Hane@gmail.com",
					hashedPassword:
						"$2a$10$lska2JvvhTLiSPAAU2mkr.2uUW8l3l//zb33KFeaAAxq/uQcG.XKe",
				},
				{
					firstName: "Jettie",
					lastName: "Kling",
					email: "Lauretta_Hane@yahoo.com",
					hashedPassword:
						"$2a$10$lcZdyjZutfL8VmYmIe6C4ukAnwrhla9BPOxJLidzJUgpDtzi8hijC",
				},
				{
					firstName: "Cara",
					lastName: "Herman",
					email: "Annetta49@yahoo.com",
					hashedPassword:
						"$2a$10$Z1bbk1CISlDG6NNXemI98OPc.vrNR6CyB0riTReKcG4NCuCnrKcUy",
				},
				{
					firstName: "Kurt",
					lastName: "Bechtelar",
					email: "Devon_Crist@hotmail.com",
					hashedPassword:
						"$2a$10$kb5gS1Oj774ssXNRnKHf6urZJVJoF05P1H/Y.m9xddBIfeeMuQC5u",
				},
				{
					firstName: "Queen",
					lastName: "Kessler",
					email: "Evangeline73@hotmail.com",
					hashedPassword:
						"$2a$10$VzG0etCALU26m4nBIiwN2uJNbF.MR9ScjPBCaaXHQn3B.yEr/f7MK",
				},
				{
					firstName: "Francesco",
					lastName: "Mueller",
					email: "Santina40@yahoo.com",
					hashedPassword:
						"$2a$10$EdOv5dT4IR9Q7SRGk29SXumz73oDIxX81kUaXqSa1bYJWu7koRHHq",
				},
				{
					firstName: "Shannon",
					lastName: "White",
					email: "Dalton18@yahoo.com",
					hashedPassword:
						"$2a$10$0enOC/M4o/.cnsO6oYuz5.mk7NI/fTpBsAohQYxvWug.BFro/nD1i",
				},
				{
					firstName: "Isac",
					lastName: "Durgan",
					email: "Eleazar_Thompson@yahoo.com",
					hashedPassword:
						"$2a$10$B4yr371aCiyd4EwuoHWX0esPJLv4d1C5G80xjkO/KOMOy63MajqAK",
				},
				{
					firstName: "Daija",
					lastName: "Ernser",
					email: "Mallie79@hotmail.com",
					hashedPassword:
						"$2a$10$vkkr4m9kWVXPSmO5A7i2EuA6r74J2jlcXc.D/NgvMEPbMY7HJzcIa",
				},
				{
					firstName: "Jazlyn",
					lastName: "Grant",
					email: "Annalise_Steuber94@gmail.com",
					hashedPassword:
						"$2a$10$NhfvmiM/mmZWZBzLFp9rSeWK8VmaleNcqG/3QyLe5mmZ6v85fukl.",
				},
				{
					firstName: "Richie",
					lastName: "Rohan",
					email: "Issac44@yahoo.com",
					hashedPassword:
						"$2a$10$TotDACg2QvIiIdVVjQ3Ih.zOlzCbO3PxH1v26j4bf/9T5rIwTBbiK",
				},
				{
					firstName: "Lucie",
					lastName: "Smitham",
					email: "Matteo.Hahn@gmail.com",
					hashedPassword:
						"$2a$10$fUYBmSnQY2ZZmJ.ZYaEpmeyASE1FlafiIDZjkZLgg8Ks.iTIJ3Xqq",
				},
				{
					firstName: "Rory",
					lastName: "Franecki",
					email: "Berneice7@hotmail.com",
					hashedPassword:
						"$2a$10$NxLW4USoNO4Ef49uMiLD4uLrl6KsR0aMX3j95IfqrV1PLiW3kaApW",
				},
				{
					firstName: "Randi",
					lastName: "Legros",
					email: "Brittany65@hotmail.com",
					hashedPassword:
						"$2a$10$1l22SrxExJAEfg.2ZPdNf.p.XzKEusPJ1aeY5UYzn9zio3sU1eLwy",
				},
				{
					firstName: "Natalia",
					lastName: "Rath",
					email: "Brando.Adams@yahoo.com",
					hashedPassword:
						"$2a$10$qD25E9BhPFrrhCWfeIIEsuWDqiEeDtoohAwevhHkm07nYO/u0k97C",
				},
				{
					firstName: "Carmella",
					lastName: "Abbott",
					email: "Julien_Hills39@yahoo.com",
					hashedPassword:
						"$2a$10$n/hmM/R2dbnE0pFMpbmybOUrAN6j8m5KUMnofKeIKFkrcXAhj/oK.",
				},
				{
					firstName: "Beaulah",
					lastName: "Hettinger",
					email: "Garfield11@yahoo.com",
					hashedPassword:
						"$2a$10$wsxCExOkJq54ADBXAfe2LOSsWmFtQn3zT3KPjIu3elddcJrjdeiK2",
				},
				{
					firstName: "Ilene",
					lastName: "Renner",
					email: "Heather.Kris@hotmail.com",
					hashedPassword:
						"$2a$10$X9pjbdfnhjqA3LwgyhGfJO2TQP56.ysWa9Wq0fxlN49brxzsC5.9W",
				},
				{
					firstName: "Gardner",
					lastName: "Willms",
					email: "Garrett_McDermott93@hotmail.com",
					hashedPassword:
						"$2a$10$1YBwr7d96agjqPV/VXa1lex3kqCjqKP3tTmNb3qHwW95pcKYb8PHq",
				},
				{
					firstName: "Ali",
					lastName: "Crist",
					email: "Elvis_Klein28@hotmail.com",
					hashedPassword:
						"$2a$10$sQMbA8MFKF0tiab6zOn2rOAyNmrKT3gcPfS/MLUmTwecZtAVy1T7q",
				},
				{
					firstName: "Elton",
					lastName: "Gaylord",
					email: "Rhianna99@yahoo.com",
					hashedPassword:
						"$2a$10$nzzOoVJIVCQ.r7RAfwNd/O2ueJ1Orhlt/fQan97CLi94snPFO8Byy",
				},
				{
					firstName: "Monique",
					lastName: "Walsh",
					email: "Angel_Beatty88@gmail.com",
					hashedPassword:
						"$2a$10$duKPqQd59VO9hoRmhkQP6esL3IN7eVWCwOWJwYhSlf5/miwbSCLMi",
				},
				{
					firstName: "Rupert",
					lastName: "Ryan",
					email: "Berta_Raynor@yahoo.com",
					hashedPassword:
						"$2a$10$Cff4aS0818llmaN/fOEW5ectWvF7iCkdlxFKLcsIrgItGI6T2cHrq",
				},
				{
					firstName: "Jaden",
					lastName: "Medhurst",
					email: "Tyree69@yahoo.com",
					hashedPassword:
						"$2a$10$9NhGRKATUCnI15xRbXcbrO.yKbPWyvGiwhUy.z5JkbzkIVxZppZOK",
				},
				{
					firstName: "Yasmeen",
					lastName: "Hessel",
					email: "Lesley.Von@hotmail.com",
					hashedPassword:
						"$2a$10$mq1FMzN9KYHwiqLsr3EPL.Vit1/hnqjiFvWZRundLZrjFHetEuNkq",
				},
				{
					firstName: "Jaylen",
					lastName: "Luettgen",
					email: "Alejandrin.Metz78@hotmail.com",
					hashedPassword:
						"$2a$10$htsyt74XRHaPD1eZAs9rB.p90/30x3yrEginpg/9lWdURcL12.zzG",
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
