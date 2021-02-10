const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  dob: { type: Number, required: true },
  email: {
    type: String,
    required: true,
    validate: function (answer) {
      if (answer.includes(" ")) {
        return "Please provide a valid email address.";
      } else {
        return true;
      }
    },
  },
  trade: [
    {
      type: Schema.Types.ObjectId,
      ref: "Trade"
    }
  ],
  password: {
    type: String,
    required: true,
    validate: function (answer) {
      if (answer < 5) {
        return "Password must be greater than 5 characters.";
      } 
    },
  },
  zipcode: { type: Number, required: true },
  confirm: {
    type: Boolean,
    validate: function (answer) {
      if (answer !== false && dob > 2003) {
        return true;
      } else {
        return "You must be at least 18 years old to create an account.";
      }
    },
  },
  date: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
