const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { Op } = require("sequelize");
const { requireAuth } = require("../../utils/auth");
const { Spot, User, Review } = require("../../db/models");
const { handleValidationErrors } = require("../../utils/validation");
const { parse } = require("path");

const router = express.Router();

const validateReview = [
	check("rating")
		.exists({ checkFalsy: true })
		.isInt({ min: 1, max: 5 })
		.withMessage("Please enter a rating between 1 and 5."),
	check("content")
		.exists({ checkFalsy: true })
		.isLength({ min: 10 })
		.withMessage("Please enter a review with more than 10 characters.")
		.isLength({ max: 1000 })
		.withMessage("Please limit your review to 1000 characters."),
	handleValidationErrors,
];

router.post(
	"/spots/:spotId/reviews",
	validateReview,
	requireAuth,
	asyncHandler(async (req, res) => {
		const { user } = req;
		const spotId = parseInt(req.params.spotId, 10);
		const { rating, content } = req.body;

		const review = await Review.create({
			spotId,
			userId: user.id,
			rating,
			content,
		});

		const newReview = await Review.findByPk(review.id, { include: User });
		return res.json(newReview);
	})
);

router.put(
	"/reviews/:id",
	validateReview,
	requireAuth,
	asyncHandler(async (req, res) => {
		const { user } = req;
		const id = parseInt(req.params.id, 10);
		const review = await Review.findByPk(id);
		const { rating, content } = req.body;

		try {
			if (user.id === review.userId) {
				if (review) {
					await Review.update(
						{ rating, content },
						{ where: { id }, returning: true }
					);
					const updatedReview = await Review.findByPk(id, {
						include: User,
					});
					return res.json(updatedReview);
				} else {
					throw new Error("Review Not Found.");
				}
			} else {
				throw new Error(
					"Unauthorized. You are not permitted to update this review."
				);
			}
		} catch (err) {
			console.error("Review Not Found: ", err);
		}
	})
);

router.delete(
	"/reviews/:id",
	requireAuth,
	asyncHandler(async (req, res) => {
		const { user } = req;
		const id = parseInt(req.params.id, 10);
		const review = await Review.findByPk(id);

		try {
			if (user.id === review.userId) {
				if (review) {
					await Review.destroy({ where: { id } });
					return res.json({ id });
				} else {
					throw new Error("Review Not Found.");
				}
			} else {
				throw new Error(
					"Unauthorized. You are not permitted to delete this review."
				);
			}
		} catch (err) {
			console.error("Review Not Found: ", err);
		}
	})
);

module.exports = router;
