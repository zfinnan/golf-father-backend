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
  phone: {
    type: Number,
    required: false,
  },
  income: {
    type: Number,
    required: false,
  },
  savings: {
    type: Number,
    required: false,
  },
  current_account_status: {
    type: Number,
    required: false,
  },
  residence: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  investments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Investment" }],
  blogpost: [{ type: mongoose.Schema.Types.ObjectId, ref: "BlogPost" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Expense" }],
  additionalExpenses: [
    { type: mongoose.Schema.Types.ObjectId, ref: "AdditionalExpense" },
  ],
  rent: {
    type: Number,
  },
  utilities: {
    type: Number,
  },
  phone: {
    type: Number,
  },
  internet: {
    type: Number,
  },
  insurance: {
    type: Number,
  },
  groceries: {
    type: Number,
  },
  childCare: {
    type: Number,
  },
  dryCleaning: {
    type: Number,
  },
  houseCleaning: {
    type: Number,
  },
  petCare: {
    type: Number,
  },
  gas: {
    type: Number,
  },
  carInsurance: {
    type: Number,
  },
  carRepairs: {
    type: Number,
  },
  carWash: {
    type: Number,
  },
  parking: {
    type: Number,
  },
  publicTransportation: {
    type: Number,
  },
  rideShare: {
    type: Number,
  },
  television: {
    type: Number,
  },
  movies: {
    type: Number,
  },
  concerts: {
    type: Number,
  },
  miscellaneous: {
    type: Number,
  }
});

userSchema.statics.getExpenses = async function (expenseIds) {
  try {
  } catch (e) {
    throw e;
  }
};

module.exports = User = mongoose.model("User", userSchema);
