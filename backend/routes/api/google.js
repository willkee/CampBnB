const express = require("express");
const { googleMaps } = require("../../config/index");
const { key } = googleMaps;

const router = express.Router();

router.get("/maps", (_req, res) => {
	return res.json({ key });
});

module.exports = router;
