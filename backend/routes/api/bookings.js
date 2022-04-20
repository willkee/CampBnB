const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { Spot, Booking } = require("../../db/models");

const router = express.Router();

router.get(
	"/",
	requireAuth,
	asyncHandler(async (req, res) => {
		const { user } = req;

		const myBookings = await Booking.findAll({
			where: { userId: user.id },
			include: Spot,
		});

		try {
			return res.json(myBookings);
		} catch (e) {
			console.error("Error: No bookings found: ", e);
		}
	})
);

const peopleValidation = [
	check("people")
		.exists({ checkFalsy: true })
		.isInt({ min: 1 })
		.withMessage("Please enter a valid value for the number of people.")
		.custom(async (_value, { req }) => {
			const spot = await Spot.findByPk(req.body.spotId);
			if (spot && spot.capacity < req.body.people) {
				return await Promise.reject(
					"Please enter a value for the number of people less than the capacity of the spot."
				);
			}
		}),
	handleValidationErrors,
];

router.patch(
	"/:bookingId",
	requireAuth,
	peopleValidation,
	asyncHandler(async (req, res) => {
		const id = parseInt(req.params.bookingId, 10);
		const booking = await Booking.findByPk(id);
		const { user } = req;

		try {
			if (booking && user.id === booking.userId) {
				const update = await Booking.update(
					{ people: req.body.people },
					{ where: { id }, returning: true }
				);

				const updatedBooking = await Booking.findByPk(booking.id, {
					include: Spot,
				});
				return res.json(updatedBooking);
			}
		} catch (e) {
			console.error(
				"Error: Booking not found, or you are not authorized to perform this operation. ",
				e
			);
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
