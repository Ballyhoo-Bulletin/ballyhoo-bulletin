const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tradeSchema = new Schema({
  need: {
    type: String,
  },
  trades: [
    {
      type: String,
    },
  ],

  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },

  // uploadImages: {
  //   type: String,
  // },
});

const Trade = mongoose.model("Trade", tradeSchema);

module.exports = Trade;
