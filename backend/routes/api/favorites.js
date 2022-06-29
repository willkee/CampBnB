const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { requireAuth } = require("../../utils/auth");
const { Spot, User, Booking, Review, Favorite } = require("../../db/models");

const router = express.Router();

router.get(
	"/spots/:spotId/favorites",
	asyncHandler(async (_req, res) => {
		// Find all of the favorites for a single spot.
		const spotId = parseInt(req.params.spotId, 10);

		const spot = await Spot.findByPk(spotId);

		try {
			if (spot) {
				const favorites = await Favorite.FindAll({ where: { spotId } });

				return res.json(favorites);
			} else {
				throw new Error("Spot Not Found.");
			}
		} catch (err) {
			console.error("Error: Spot Not Found.", err);
		}
	})
);

module.exports = router;
