const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  rounds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Round" }],
});

userSchema.statics.getRounds = async function (roundIds) {
  try {
  } catch (e) {
    throw e;
  }
};

module.exports = User = mongoose.model("User", userSchema);
