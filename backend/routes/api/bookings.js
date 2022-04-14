const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { Spot, User, Booking } = require("../../db/models");

const router = express.Router();

router.get(
	"/",
	requireAuth,
	asyncHandler(async (req, res) => {
		const { user } = req;

		const myBookings = await Booking.findAll({
			where: { userId: user.id },
			include: [{ model: User }, { model: Spot }],
		});

		try {
			return res.json(myBookings);
		} catch (e) {
			console.error("Error: No bookings found: ", e);
		}
	})
);

module.exports = router;
