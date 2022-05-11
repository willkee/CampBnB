const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { Op } = require("sequelize");
const { requireAuth } = require("../../utils/auth");
const { Spot, User, Review } = require("../../db/models");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateReview = [
	check("rating")
		.exists({ checkFalsy: true })
		.isInt({ min: 1, max: 5 })
		.withMessage("Please enter a rating between 1 and 5."),
	check("content")
		.exists({ checkFalsy: true })
		.isLength({ min: 10 })
		.withMessage("Please enter some more details!")
		.isLength({ max: 1000 })
		.withMessage("Please limit your review to 1000 characters."),
];

module.exports = router;
