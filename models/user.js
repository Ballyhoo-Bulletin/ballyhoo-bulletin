const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userID: {
    type: String,
  },
  email: {
    type: String,
  },
  city: {
    type: String,
  },
  trades: [
    {
      type: Schema.Types.ObjectId,
      ref: "Trade"
    }
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;