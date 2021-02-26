const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tradeSchema = new Schema({
  userID: {
    type: String,
  },
  email: {
    type: String,
  },
  // what you want to obtain, "need"
  need: {
    type: String,
  },
  city: {
    type: String,
  },

  //for reference
  // trades: {
  //   options: [{ type: String }],
  //   image: {
  //     type: Buffer.Schema.Types.ObjectId,
  //     ref: "Image",
  //   },
  // },

  // the "trade you for..."
  trades: [
    {
      type: String,
    },
  ],
  claimed: [
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
