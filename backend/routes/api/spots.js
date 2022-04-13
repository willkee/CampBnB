const express = require("express");
const { check, oneOf } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { Spot, User } = require("../../db/models");

const router = express.Router();

const validateNewSpot = [
	oneOf([
		[check("lat").exists(), check("long").exists()],
		check("address").exists().isLength({ max: 255 }),
	]),
	check("name")
		.exists({ checkFalsy: true })
		.withMessage("Please enter a name for your spot"),
	check("city")
		.exists({ checkFalsy: true })
		.withMessage("Please enter the city of your spot."),
	check("imageUrl")
		.exists({ checkFalsy: true })
		.withMessage("Please enter an image URL.")
		.isLength({ min: 3, max: 2048 })
		.withMessage(
			"Please enter an image URL between 3 and 2048 characters."
		),
	check("type")
		.exists({ checkFalsy: true })
		.isIn(["vehicle", "rv", "tent", "backpacking"])
		.withMessage("Please enter a valid type."),
	check("price")
		.exists({ checkFalsy: true })
		.withMessage(
			"Please enter a nightly price for your spot. Enter '0' if it is free of charge."
		)
		.isInt()
		.withMessage("Please enter a integer for the price (No cents)."),
	check("capacity")
		.exists({ checkFalsy: true })
		.isInt()
		.withMessage("Please enter a valid maximum capacity."),
	handleValidationErrors,
];

router.get(
	"/",
	asyncHandler(async (req, res) => {
		const spots = await Spot.findAll({
			include: [{ model: User }],
			order: [["id"]],
		});
		return res.json({ spots });
	})
);

router.post(
	"/",
	requireAuth,
	validateNewSpot,
	asyncHandler(async (req, res) => {
		const { user } = req;
		console.log("\n\n\n USER \n\n\n", user, "\n\n\n USER \n\n\n");
		const {
			name,
			address,
			city,
			lat,
			long,
			imageUrl,
			type,
			price,
			description,
			capacity,
			open,
		} = req.body;

		const newSpot = await Spot.create({
			ownerId: user.id,
			name,
			address,
			city,
			lat,
			long,
			imageUrl,
			type,
			price,
			description,
			capacity,
			open,
		});
		const createdSpot = await Spot.findOne({
			include: [{ model: User }],
			where: { id: newSpot.id },
		});
		return res.json(createdSpot);
	})
);

// Sign up
// router.post(
// 	"",
// 	validateSignup,
// 	asyncHandler(async (req, res) => {
// 		const { firstName, lastName, email, password } = req.body;
// 		const user = await User.signup({
// 			firstName,
// 			lastName,
// 			email,
// 			password,
// 		});

// 		await setTokenCookie(res, user);

// 		return res.json({
// 			user,
// 		});
// 	})
// );

module.exports = router;
