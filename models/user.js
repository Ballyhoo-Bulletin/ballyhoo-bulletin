const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { 
    type: String, 
    required: true },
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
    type: {
      type: String,
    },
    name: String,
  },
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
  zipcode: { 
    type: Number, 
    required: true 
  },
  day: { type: Date, default: () => new Date() }
    ,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
