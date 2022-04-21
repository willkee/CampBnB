const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { Spot, User, Booking } = require("../../db/models");
const { Op } = require("sequelize");
const { fileUpload, multerUpload } = require("../../awsS3");

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
		.withMessage("Please enter a name for your spot")
		.isLength({ max: 255 })
		.withMessage(
			"Please enter no more than 255 characters for the name of your spot."
		),
	check("city")
		.exists({ checkFalsy: true })
		.withMessage("Please enter the city of your spot.")
		.isLength({ max: 255 })
		.withMessage(
			"There's no city name in the world longer than 255 characters!"
		),
	check("imageUrl").custom(async (_value, { req }) => {
		if (!req.file && !req.body.imageUrl) {
			return await Promise.reject("Please upload an image.");
		} else if (
			req.file &&
			req.file.mimetype !== "image/jpeg" &&
			req.file.mimetype !== "image/jpg" &&
			req.file.mimetype !== "image/png" &&
			req.file.mimetype !== "image/gif"
		) {
			return await Promise.reject(
				"Please upload an image with one of the following file types: .jpeg, .jpg, .png, .gif."
			);
		} else if (req.file && req.file.size > 1000000) {
			return await Promise.reject(
				"Please upload an image less than 1MB in size. Try an image compressor tool!"
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
			"Please enter a nightly price for your spot. Enter '0' if free of charge."
		)
		.isInt()
		.withMessage("Please enter a integer for the price (No cents).")
		.isInt({ min: 0 })
		.withMessage("Please enter a valid value for the price."),
	check("capacity")
		.exists({ checkFalsy: true })
		.isInt({ min: 1 })
		.withMessage("Please enter a valid maximum capacity.")
		.isInt({ max: 1000 })
		.withMessage("Please don't enter a maximum capacity over 1000 people."),
	check("description")
		.isLength({ min: 0, max: 2500 })
		.withMessage("Please keep your description under 2500 characters."),
	handleValidationErrors,
];

router.get(
	"/",
	asyncHandler(async (_req, res) => {
		const spots = await Spot.findAll({
			attributes: [
				"id",
				"ownerId",
				"name",
				"city",
				"imageUrl",
				"type",
				"price",
				"open",
			],
			include: Booking,
		});
		return res.json(spots);
	})
);

router.get(
	"/:id",
	asyncHandler(async (req, res) => {
		const id = parseInt(req.params.id, 10);
		const spot = await Spot.findByPk(id, {
			include: [{ model: User }, { model: Booking }],
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
	multerUpload("imageUrl"),
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
			type,
			price,
			description,
			capacity,
		} = req.body;

		const imageUpload = await fileUpload(req.file);

		const newSpot = await Spot.create({
			ownerId: user.id,
			name,
			address,
			city,
			lat,
			long,
			imageUrl: imageUpload,
			type,
			price,
			description,
			capacity,
			open: true,
		});

		const spot = await Spot.findByPk(newSpot.id, {
			include: Booking,
		});

		return res.json(spot);
	})
);

router.put(
	"/:id",
	multerUpload("imageUrl"),
	requireAuth,
	validateSpot,
	asyncHandler(async (req, res) => {
		const id = parseInt(req.params.id, 10);
		const spot = await Spot.findOne({ where: { id } });

		try {
			if (spot) {
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

				let imageUpload;
				if (req.file) imageUpload = await fileUpload(req.file);

				if (!req.file && imageUrl) {
					await Spot.update(
						{
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
						},
						{
							where: { id },
							returning: true,
							plain: true,
						}
					);
				} else {
					await Spot.update(
						{
							name,
							address,
							city,
							lat,
							long,
							imageUrl: imageUpload,
							type,
							price,
							description,
							capacity,
						},
						{
							where: { id },
							returning: true,
							plain: true,
						}
					);
				}

				const updatedSpot = await Spot.findByPk(id, {
					include: [{ model: User }, { model: Booking }],
				});
				return res.json(updatedSpot);
			}
		} catch (e) {
			console.error("Error: Spot not found: ", e);
		}
	})
);

router.patch(
	"/:id/switch",
	requireAuth,
	asyncHandler(async (req, res) => {
		const id = parseInt(req.params.id, 10);
		const spot = await Spot.findOne({ where: { id } });

		try {
			if (spot) {
				await Spot.update(
					{ open: !spot.open },
					{
						where: { id: spot.id },
						returning: true,
					}
				);

				const result = await Spot.findByPk(spot.id, {
					include: [{ model: User }, { model: Booking }],
				});
				return res.json(result);
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

// ---------------------------------------------------------------------------------
// CREATE NEW BOOKING
// ---------------------------------------------------------------------------------

const validateBooking = [
	check("startDate")
		.exists({ checkFalsy: true })
		.withMessage("Please enter a start date.")
		.custom(async (_value, { req }) => {
			const bookings = await Booking.findAll({
				where: {
					[Op.or]: [
						{
							startDate: {
								[Op.between]: [
									req.body.startDate,
									req.body.endDate,
								],
							},
						},
						{
							endDate: {
								[Op.between]: [
									req.body.startDate,
									req.body.endDate,
								],
							},
						},
					],
					spotId: req.body.spotId,
				},
			});
			if (req.body.startDate && req.body.endDate && bookings.length) {
				return await Promise.reject(
					"Some or all of the dates you selected are not available."
				);
			}
		}),
	check("endDate")
		.exists({ checkFalsy: true })
		.withMessage("Please enter an end date."),
	check("people")
		.exists({ checkFalsy: true })
		.withMessage("Please enter the number of people for your booking.")
		.isInt({ min: 1 })
		.withMessage(
			"Please enter at least one person for the number of people."
		)
		.custom(async (_value, { req }) => {
			const spot = await Spot.findByPk(req.body.spotId);
			if (spot && !spot.open) {
				return await Promise.reject(
					"This spot is not currently accepting new bookings."
				);
			}
		}),

	handleValidationErrors,
];

router.post(
	"/:spotId/book",
	requireAuth,
	validateBooking,
	asyncHandler(async (req, res) => {
		const id = parseInt(req.params.spotId, 10);
		const { user } = req;
		const { startDate, endDate, people } = req.body;

		const booking = await Booking.create({
			spotId: id,
			userId: user.id,
			startDate,
			endDate,
			people,
		});

		const newBooking = await Booking.findByPk(booking.id, {
			include: Spot,
		});
		return res.json(newBooking);
	})
);

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

module.exports = router;
