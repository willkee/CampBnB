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

router.delete(
	"/:bookingId",
	requireAuth,
	asyncHandler(async (req, res) => {
		const { user } = req;
		const id = parseInt(req.params.bookingId, 10);
		const booking = await Booking.findByPk(id);

		// Check to see if the booking exists.
		if (booking) {
			// Check to see if the current user is the owner of the booking
			if (booking.userId === user.id) {
				// Both validations checked and passed:
				await Booking.destroy({ where: { id } });
				return res.json({ id });
			} else {
				throw new Error(
					"Unauthorized: You are not permitted to delete this booking."
				);
			}
		} else {
			throw new Error("Booking Not Found.");
		}
	})
);

module.exports = router;
