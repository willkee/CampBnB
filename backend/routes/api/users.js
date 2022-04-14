const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");

const router = express.Router();

const validateSignup = [
	check("firstName")
		.exists({ checkFalsy: true })
		.notEmpty()
		.withMessage("Please enter your first name."),
	check("lastName")
		.exists({ checkFalsy: true })
		.notEmpty()
		.withMessage("Please enter your last name."),
	check("email")
		.exists({ checkFalsy: true })
		.isEmail()
		.withMessage("Please provide a valid email.")
		.custom(async (_value, { req }) => {
			const query = await User.findOne({
				where: { email: req.body.email },
			});
			if (query) {
				return await Promise.reject(
					"Email address is already in use. Login instead?"
				);
			}
		}),
	check("password")
		.exists({ checkFalsy: true })
		.isLength({ min: 6 })
		.withMessage("Password must be 6 characters or more."),
	check("confirmPassword")
		.exists({ checkFalsy: true })
		.withMessage("Please confirm your password.")
		.custom(async (_value, { req }) => {
			if (req.body.password !== req.body.confirmPassword) {
				return await Promise.reject("Your passwords do not match.");
			}
		}),
	handleValidationErrors,
];

// Sign up
router.post(
	"",
	validateSignup,
	asyncHandler(async (req, res) => {
		const { firstName, lastName, email, password } = req.body;
		const user = await User.signup({
			firstName,
			lastName,
			email,
			password,
		});

		await setTokenCookie(res, user);

		return res.json({
			user,
		});
	})
);

module.exports = router;
