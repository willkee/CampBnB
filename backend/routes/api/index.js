const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const spotsRouter = require("./spots.js");
const bookingsRouter = require("./bookings.js");
const reviewsRouter = require("./reviews.js");
const googleRouter = require("./google");

router.post("/test", function (req, res) {
	res.json({ requestBody: req.body });
});

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/spots", spotsRouter);
router.use("/bookings", bookingsRouter);
router.use(reviewsRouter);
router.use("/google", googleRouter);

module.exports = router;
