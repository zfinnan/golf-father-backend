const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const passport = require("passport");
const JWT_SECRET = process.env.JWT_SECRET;
// Load User model
// const User = require('../../models/User');
const db = require("../models");

// GET api/users/test (Public)
router.get("/test", (req, res) => {
  res.json({ msg: "User endpoint OK" });
});

// POST api/users/register (Public)
router.post("/register", (req, res) => {
  // Find user by email
  db.User.findOne({ email: req.body.email }).then((user) => {
    // if email already exists, send a 400 response
    if (user) {
      return res.status(400).json({ msg: "Email already exists" });
    } else {
      // Create a new user
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        income: req.body.income,
        savings: req.body.savings,
        residence: req.body.residence,
        rent: req.body.rent,
        utilities: req.body.utilities,
        phone: req.body.phone,
        internet: req.body.internet,
        insurance: req.body.insurance,
        groceries: req.body.groceries,
        childCare: req.body.childCare,
        dryCleaning: req.body.dryCleaning,
        houseCleaning: req.body.houseCleaning,
        petCare: req.body.petCare,
        gas: req.body.gas,
        carInsurance: req.body.carInsurance,
        carRepairs: req.body.carRepairs,
        carWash: req.body.carWash,
        parking: req.body.parking,
        publicTransportation: req.body.publicTransportation,
        rideShare: req.body.rideShare,
        television: req.body.television,
        movies: req.body.movies,
        concerts: req.body.concerts,
        miscellaneous: req.body.miscellaneous,
      });

      // Salt and hash the password, then save the user
      bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(newUser.password, salt, (error, hash) => {
          if (error) throw error;
          // Change the password to the hash
          newUser.password = hash;
          newUser
            .save()
            .then((createdUser) => res.json(createdUser))
            .catch((error) => console.log(error));
        });
      });
    }
  });
});

// POST api/users/login (Public)
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find a user via email
  db.User.findOne({ email }).then((user) => {
    if (!user) {
      res.status(401).json({ msg: "User not found" });
    } else {
      // Check password with bcrypt
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          // User match, send JSON web token
          // Create a token payload (you can include anything you want)
          const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
          };

          // Sign token
          jwt.sign(payload, JWT_SECRET, { expiresIn: 3600 }, (error, token) => {
            res.json({ success: true, token: `Bearer ${token}` });
          });
        } else {
          return res
            .status(400)
            .json({ password: "Password or email is incorrect" });
        }
      });
    }
  });
});

// GET api/users/current (Private)
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      phoneNumber: req.user.phoneNumber,
      income: req.user.income,
      savings: req.user.savings,
      residence: req.user.residence,
      rent: req.user.rent,
      utilities: req.user.utilities,
      phone: req.user.phone,
      internet: req.user.internet,
      insurance: req.user.insurance,
      groceries: req.user.groceries,
      childCare: req.user.childCare,
      dryCleaning: req.user.dryCleaning,
      houseCleaning: req.user.houseCleaning,
      petCare: req.user.petCare,
      gas: req.user.gas,
      carInsurance: req.user.carInsurance,
      carRepairs: req.user.carRepairs,
      carWash: req.user.carWash,
      parking: req.user.parking,
      publicTransportation: req.user.publicTransportation,
      rideShare: req.user.rideShare,
      television: req.user.television,
      movies: req.user.movies,
      concerts: req.user.concerts,
      miscellaneous: req.user.miscellaneous,
    });
  }
);

module.exports = router;
