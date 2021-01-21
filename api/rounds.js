const express = require("express");
const router = express.Router();
const passport = require("passport");

const models = require("../models");
const { model } = require("../models/User");

router.get("/roundsTest", (req, res) => {
    res.json({ msg: "User endpoint OK!" });
});

router.get(
    "/:id/myExpenses",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      let roundsList = [];
      models.User.findOne({ _id: req.user.id })
        .populate("rounds")
        .then((user) => {
          res.send(user.rounds);
        })
        .catch((error) => res.send({ error }));
    }
);

router.get("/:id", (req, res) => {
    models.User.findOne({ _id: req.user.id })
      .then((user) => {
        if ("user.rounds".includes(req.body.roundId)) {
          models.Round.findOne({ _id: req.body.roundId }).then(
            (foundRound) => {
              res.status(200).json({ foundRound });
            }
          );
        } else {
          res.send({ msg: "User did not play that round!" });
        }
      })
      .catch((error) => res.send({ error }));
});

router.post(
    "/new",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      models.User.findOne({ _id: req.user.id })
        .then((user) => {
          models.Round.findOne({
            course: req.body.course
          });
          const newRound = new models.Round({
            course: req.body.data.course,
            day: req.body.data.day,
            month: req.body.data.month,
            year: req.body.data.year,
            frontNineTotalYardage: req.body.data.frontNineTotalYardage,
            backNineTotalYardage: req.body.data.backNineTotalYardage,
            totalYardage: req.body.data.totalYardage,
            holeOneYardage: req.body.data.holeOneYardage,
            holeTwoYardage: req.body.data.holeTwoYardage,
            holeThreeYardage: req.body.data.holeThreeYardage,
            holeFourYardage: req.body.data.holeFourYardage,
            holeFiveYardage: req.body.data.holeFiveYardage,
            holeSixYardage: req.body.data.holeSixYardage,
            holeSevenYardage: req.body.data.holeSevenYardage,
            holeEightYardage: req.body.data.holeEightYardage,
            holeNineYardage: req.body.data.holeNineYardage,
            holeTenYardage: req.body.data.holeTenYardage,
            holeElevenYardage: req.body.data.holeElevenYardage,
            holeTwelveYardage: req.body.data.holeTwelveYardage,
            holeThirteenYardage: req.body.data.holeThirteenYardage,
            holeFourteenYardage: req.body.data.holeFourteenYardage,
            holeFifteenYardage: req.body.data.holeFifteenYardage,
            holeSixteenYardage: req.body.data.holeSixteenYardage,
            holeSeventeenYardage: req.body.data.holeSeventeenYardage,
            holeEighteenYardage: req.body.data.holeEighteenYardage,
            frontNinePar: req.body.data.frontNinePar,
            backNinePar: req.body.data.backNinePar,
            totalPar: req.body.data.totalPar,
            holeOnePar: req.body.data.holeOnePar,
            holeTwoPar: req.body.data.holeTwoPar,
            holeThreePar: req.body.data.holeThreePar,
            holeFourPar: req.body.data.holeFourPar,
            holeFivePar: req.body.data.holeFivePar,
            holeSixPar: req.body.data.holeSixPar,
            holeSevenPar: req.body.data.holeSevenPar,
            holeEightPar: req.body.data.holeEightPar,
            holeNinePar: req.body.data.holeNinePar,
            holeTenPar: req.body.data.holeTenPar,
            holeElevenPar: req.body.data.holeElevenPar,
            holeTwelvePar: req.body.data.holeTwelvePar,
            holeThirteenPar: req.body.data.holeThirteenPar,
            holeFourteenPar: req.body.data.holeFourteenPar,
            holeFifteenPar: req.body.data.holeFifteenPar,
            holeSixteenPar: req.body.data.holeSixteenPar,
            holeSeventeenPar: req.body.data.holeSeventeenPar,
            holeEighteenPar: req.body.data.holeEighteenPar,
            frontNineScore: req.body.data.frontNineScore,
            backNineScore: req.body.data.backNineScore,
            totalScore: req.body.data.totalScore,
            holeOneScore: req.body.data.holeOneScore,
            holeTwoScore: req.body.data.holeTwoScore,
            holeThreeScore: req.body.data.holeThreeScore,
            holeFourScore: req.body.data.holeFourScore,
            holeFiveScore: req.body.data.holeFiveScore,
            holeSixScore: req.body.data.holeSixScore,
            holeSevenScore: req.body.data.holeSevenScore,
            holeEightScore: req.body.data.holeEightScore,
            holeNineScore: req.body.data.holeNineScore,
            holeTenScore: req.body.data.holeTenScore,
            holeElevenScore: req.body.data.holeElevenScore,
            holeTwelveScore: req.body.data.holeTwelveScore,
            holeThirteenScore: req.body.data.holeThirteenScore,
            holeFourteenScore: req.body.data.holeFourteenScore,
            holeFifteenScore: req.body.data.holeFifteenScore,
            holeSixteenScore: req.body.data.holeSixteenScore,
            holeSeventeenScore: req.body.data.holeSeventeenScore,
            holeEighteenScore: req.body.data.holeEighteenScore,
            playerOne: req.body.data.playerOne,
            playerTwo: req.body.data.playerTwo,
            playerThree: req.body.data.playerThree,
            playerFour: req.body.data.playerFour
          });
          newRound.save();
          user.rounds.push(newRound);
          user.save();
          res.send({ newRound });
        })
        .catch((error) => res.send({ error }));
    }
);

router.put("/:id", (req, res) => {
    // const { expense } = req.body
    models.Round.findOneAndUpdate(
      { _id: req.params.id },
      {
        course: req.body.data.course,
        day: req.body.data.day,
        month: req.body.data.month,
        year: req.body.data.year,
        frontNineTotalYardage: req.body.data.frontNineTotalYardage,
        backNineTotalYardage: req.body.data.backNineTotalYardage,
        totalYardage: req.body.data.totalYardage,
        holeOneYardage: req.body.data.holeOneYardage,
        holeTwoYardage: req.body.data.holeTwoYardage,
        holeThreeYardage: req.body.data.holeThreeYardage,
        holeFourYardage: req.body.data.holeFourYardage,
        holeFiveYardage: req.body.data.holeFiveYardage,
        holeSixYardage: req.body.data.holeSixYardage,
        holeSevenYardage: req.body.data.holeSevenYardage,
        holeEightYardage: req.body.data.holeEightYardage,
        holeNineYardage: req.body.data.holeNineYardage,
        holeTenYardage: req.body.data.holeTenYardage,
        holeElevenYardage: req.body.data.holeElevenYardage,
        holeTwelveYardage: req.body.data.holeTwelveYardage,
        holeThirteenYardage: req.body.data.holeThirteenYardage,
        holeFourteenYardage: req.body.data.holeFourteenYardage,
        holeFifteenYardage: req.body.data.holeFifteenYardage,
        holeSixteenYardage: req.body.data.holeSixteenYardage,
        holeSeventeenYardage: req.body.data.holeSeventeenYardage,
        holeEighteenYardage: req.body.data.holeEighteenYardage,
        frontNinePar: req.body.data.frontNinePar,
        backNinePar: req.body.data.backNinePar,
        totalPar: req.body.data.totalPar,
        holeOnePar: req.body.data.holeOnePar,
        holeTwoPar: req.body.data.holeTwoPar,
        holeThreePar: req.body.data.holeThreePar,
        holeFourPar: req.body.data.holeFourPar,
        holeFivePar: req.body.data.holeFivePar,
        holeSixPar: req.body.data.holeSixPar,
        holeSevenPar: req.body.data.holeSevenPar,
        holeEightPar: req.body.data.holeEightPar,
        holeNinePar: req.body.data.holeNinePar,
        holeTenPar: req.body.data.holeTenPar,
        holeElevenPar: req.body.data.holeElevenPar,
        holeTwelvePar: req.body.data.holeTwelvePar,
        holeThirteenPar: req.body.data.holeThirteenPar,
        holeFourteenPar: req.body.data.holeFourteenPar,
        holeFifteenPar: req.body.data.holeFifteenPar,
        holeSixteenPar: req.body.data.holeSixteenPar,
        holeSeventeenPar: req.body.data.holeSeventeenPar,
        holeEighteenPar: req.body.data.holeEighteenPar,
        frontNineScore: req.body.data.frontNineScore,
        backNineScore: req.body.data.backNineScore,
        totalScore: req.body.data.totalScore,
        holeOneScore: req.body.data.holeOneScore,
        holeTwoScore: req.body.data.holeTwoScore,
        holeThreeScore: req.body.data.holeThreeScore,
        holeFourScore: req.body.data.holeFourScore,
        holeFiveScore: req.body.data.holeFiveScore,
        holeSixScore: req.body.data.holeSixScore,
        holeSevenScore: req.body.data.holeSevenScore,
        holeEightScore: req.body.data.holeEightScore,
        holeNineScore: req.body.data.holeNineScore,
        holeTenScore: req.body.data.holeTenScore,
        holeElevenScore: req.body.data.holeElevenScore,
        holeTwelveScore: req.body.data.holeTwelveScore,
        holeThirteenScore: req.body.data.holeThirteenScore,
        holeFourteenScore: req.body.data.holeFourteenScore,
        holeFifteenScore: req.body.data.holeFifteenScore,
        holeSixteenScore: req.body.data.holeSixteenScore,
        holeSeventeenScore: req.body.data.holeSeventeenScore,
        holeEighteenScore: req.body.data.holeEighteenScore,
        playerOne: req.body.data.playerOne,
        playerTwo: req.body.data.playerTwo,
        playerThree: req.body.data.playerThree,
        playerFour: req.body.data.playerFour
      },
      (err, doc) => {
        if (err) {
          res.send({ msg: "Something went wrong in one of the fields" });
        } else {
          res.send({ msg: "Saved successfully" });
        }
      }
    );
});

router.delete("/:id", (req, res) => {
    console.log(req.params.id)
    // Questions on if this is fine or if me and front end need to work together
    models.Round.deleteOne({ _id: req.params.id })
      .then((round) => res.status(201).json({ round }))
      .catch((error) => res.send({ error }));
  });

module.exports = router;