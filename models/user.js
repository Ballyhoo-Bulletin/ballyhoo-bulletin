const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
  },
  city: {
    type: String,
  },
  need: {
    type: String,
  },
  trade: [{
    type: {
      type: String},
  }],

  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;