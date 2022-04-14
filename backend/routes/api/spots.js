const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { Spot, User } = require("../../db/models");

const router = express.Router();

const validateSpot = [
	check("lat").custom(async (_value, { req }) => {
		if (req.body.lat && !req.body.long) {
			return await Promise.reject(
				"You have only entered latitude coordinates. Please enter a longitude."
			);
		} else if (!req.body.lat && req.body.long) {
			return await Promise.reject(
				"You have only entered longitude coordinates. Please enter a latitude."
			);
		}
	}),
	check("address")
		.isLength({ max: 255 })
		.withMessage(
			"Please enter no more than 255 characters for your street address."
		)
		.custom(async (_value, { req }) => {
			if (!req.body.address && !req.body.lat && !req.body.long) {
				return await Promise.reject(
					"Please enter either an address or latitude and longitude coordinates."
				);
			}
		}),
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
		.withMessage("Please enter an image URL between 3 and 2048 characters.")
		.custom(async (_value, { req }) => {
			if (
				!req.body.imageUrl.endsWith(".jpg") &&
				!req.body.imageUrl.endsWith(".jpeg") &&
				!req.body.imageUrl.endsWith(".png") &&
				!req.body.imageUrl.endsWith(".gif")
			) {
				return await Promise.reject(
					"Please enter a valid image URL ending in .jpg, .jpeg, .png, or .gif."
				);
			}
		}),
	check("type")
		.exists({ checkFalsy: true })
		.isIn(["vehicle", "rv", "tent", "backpacking"])
		.withMessage("Please enter a valid type."),
	check("price")
		.exists()
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
	asyncHandler(async (_req, res) => {
		const spots = await Spot.findAll();
		return res.json({ spots });
	})
);

router.get(
	"/:id",
	asyncHandler(async (req, res) => {
		const id = parseInt(req.params.id, 10);
		const spot = await Spot.findByPk(id, {
			include: [{ model: User }],
		});

		if (spot) {
			return res.json(spot);
		} else {
			throw new Error("Spot not found.");
		}
	})
);

router.post(
	"/",
	requireAuth,
	validateSpot,
	asyncHandler(async (req, res) => {
		const { user } = req;

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
			open: true,
		});

		return res.json(newSpot);
	})
);

router.put(
	"/:id",
	requireAuth,
	validateSpot,
	asyncHandler(async (req, res) => {
		const id = parseInt(req.params.id, 10);
		const spot = await Spot.findOne({ where: { id } });

		try {
			if (spot) {
				await Spot.update(req.body, {
					where: { id },
					returning: true,
					plain: true,
				});

				const updatedSpot = await Spot.findByPk(id, {
					include: [{ model: User }],
				});
				return res.json(updatedSpot);
			}
		} catch (e) {
			console.error("Error: Spot not found: ", e);
		}
	})
);

router.delete(
	"/:id",
	requireAuth,
	asyncHandler(async (req, res) => {
		const id = parseInt(req.params.id, 10);
		const spot = await Spot.findByPk(id);

		if (spot) {
			await Spot.destroy({ where: { id } });
			return res.json({ id });
		} else {
			throw new Error("Spot not found.");
		}
	})
);

module.exports = router;
