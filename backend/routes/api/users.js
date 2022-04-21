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
		.withMessage("Please enter your first name.")
		.isLength({ min: 1, max: 50 })
		.withMessage("Please enter a first name between 1 and 50 characters."),
	check("lastName")
		.exists({ checkFalsy: true })
		.notEmpty()
		.withMessage("Please enter your last name.")
		.isLength({ min: 1, max: 50 })
		.withMessage("Please enter a last name between 1 and 50 characters."),
	check("email")
		.exists({ checkFalsy: true })
		.isEmail()
		.withMessage("Please provide a valid email.")
		.isLength({ min: 3, max: 255 })
		.withMessage(
			"Please enter an email address between 3 and 255 characters."
		)
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
		.withMessage("Password must be 6 characters or more.")
		.isLength({ max: 50 })
		.withMessage("Please keep your password under 50 characters long."),
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

const validateNameChange = [
	check("firstName")
		.exists({ checkFalsy: true })
		.notEmpty()
		.withMessage("Please enter your first name.")
		.isLength({ min: 1, max: 50 })
		.withMessage("Please enter a first name between 1 and 50 characters."),
	check("lastName")
		.exists({ checkFalsy: true })
		.notEmpty()
		.withMessage("Please enter your last name.")
		.isLength({ min: 1, max: 50 })
		.withMessage("Please enter a last name between 1 and 50 characters."),
	handleValidationErrors,
];

// Update Name Changes
router.put(
	"/:userId",
	requireAuth,
	validateNameChange,
	asyncHandler(async (req, res) => {
		const id = parseInt(req.params.userId, 10);
		const user = await User.findByPk(id);

		try {
			if (user) {
				await User.update(req.body, {
					where: { id },
					returning: true,
					plain: true,
				});

				const updatedUser = await User.findByPk(id);
				return res.json(updatedUser);
			}
		} catch (e) {
			console.error("User not found: ", e);
		}
	})
);

const validateEmailChange = [
	check("id")
		.isInt({ min: 2 })
		.withMessage("Please don't try to update the Demo User email address."),
	check("email")
		.exists({ checkFalsy: true })
		.isEmail()
		.withMessage("Please provide a valid email.")
		.isLength({ min: 3, max: 255 })
		.withMessage(
			"Please enter an email address between 3 and 255 characters."
		)
		.custom(async (_value, { req }) => {
			const query = await User.findOne({
				where: { email: req.body.email },
			});

			if (query) {
				const foundUser = await User.getCurrentUserById(query.id);

				if (foundUser.email === req.body.email) {
					return await Promise.reject(
						"You are already using that email address!"
					);
				} else {
					return await Promise.reject(
						"Email address is already in use."
					);
				}
			}
		}),
	handleValidationErrors,
];

router.put(
	"/:id/email",
	requireAuth,
	validateEmailChange,
	asyncHandler(async (req, res) => {
		const { id, email } = req.body;
		const user = await User.findByPk(id);

		if (user) {
			await User.update(
				{ email },
				{
					where: { id },
					returning: true,
					plain: true,
				}
			);

			return res.json({ email });
		}
	})
);

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
