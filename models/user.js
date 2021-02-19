const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  need: {
    type: String,
    required: "Input need type",
  },
  // trade: {
  //   type: String,
  //   required: "Select trade type",
  // },
  trade: [
    {
      type: String,
    },
  ],

  description: {
    type: String,
    required: "Input description for trade",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
