const express = require("express");
const router = express.Router();
const passport = require("passport");

const models = require("../models");
const { model } = require("../models/User");

router.get("/roundsTest", (req, res) => {
    res.json({ msg: "User endpoint OK!" });
});


module.exports = router;