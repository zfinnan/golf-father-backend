const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const roundSchema = new Schema({
    course: { type: String, required: true },
    day: { type: Number },
    month: { type: String },
    year: { type: Number },
    frontNineTotalYardage: { type: Number, required: true },
    backNineTotalYardage: { type: Number, required: true },
    totalYardage: { type: Number, required: true },
    holeOneYardage: { type: Number, required: true },
    holeTwoYardage: { type: Number, required: true },
    holeThreeYardage: { type: Number, required: true },
    holeFourYardage: { type: Number, required: true },
    holeFiveYardage: { type: Number, required: true },
    holeSixYardage: { type: Number, required: true },
    holeSevenYardage: { type: Number, required: true },
    holeEightYardage: { type: Number, required: true },
    holeNineYardage: { type: Number, required: true },
    holeTenYardage: { type: Number, required: true },
    holeElevenYardage: { type: Number, required: true },
    holeTwelveYardage: { type: Number, required: true },
    holeThirteenYardage: { type: Number, required: true },
    holeFourteenYardage: { type: Number, required: true },
    holeFifteenYardage: { type: Number, required: true },
    holeSixteenYardage: { type: Number, required: true },
    holeSeventeenYardage: { type: Number, required: true },
    holeEighteenYardage: { type: Number, required: true },
    frontNinePar: { type: Number, required: true },
    backNinePar: { type: Number, required: true },
    totalPar: { type: Number, required: true },
    holeOnePar: { type: Number, required: true },
    holeTwoPar: { type: Number, required: true },
    holeThreePar: { type: Number, required: true },
    holeFourPar: { type: Number, required: true },
    holeFivePar: { type: Number, required: true },
    holeSixPar: { type: Number, required: true },
    holeSevenPar: { type: Number, required: true },
    holeEightPar: { type: Number, required: true },
    holeNinePar: { type: Number, required: true },
    holeTenPar: { type: Number, required: true },
    holeElevenPar: { type: Number, required: true },
    holeTwelvePar: { type: Number, required: true },
    holeThirteenPar: { type: Number, required: true },
    holeFourteenPar: { type: Number, required: true },
    holeFifteenPar: { type: Number, required: true },
    holeSixteenPar: { type: Number, required: true },
    holeSeventeenPar: { type: Number, required: true },
    holeEighteenPar: { type: Number, required: true },
    frontNineScore: { type: Number, required: true },
    backNineScore: { type: Number, required: true },
    totalScore: { type: Number, required: true },
    holeOneScore: { type: Number, required: true },
    holeTwoScore: { type: Number, required: true },
    holeThreeScore: { type: Number, required: true },
    holeFourScore: { type: Number, required: true },
    holeFiveScore: { type: Number, required: true },
    holeSixScore: { type: Number, required: true },
    holeSevenScore: { type: Number, required: true },
    holeEightScore: { type: Number, required: true },
    holeNineScore: { type: Number, required: true },
    holeTenScore: { type: Number, required: true },
    holeElevenScore: { type: Number, required: true },
    holeTwelveScore: { type: Number, required: true },
    holeThirteenScore: { type: Number, required: true },
    holeFourteenScore: { type: Number, required: true },
    holeFifteenScore: { type: Number, required: true },
    holeSixteenScore: { type: Number, required: true },
    holeSeventeenScore: { type: Number, required: true },
    holeEighteenScore: { type: Number, required: true },
    playerOne: { type: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}] },
    playerTwo: { type: String },
    playerThree: { type: String },
    playerFour: { type: String }
  }
);

module.exports = Round = mongoose.model(
  "Round",
  roundSchema
);