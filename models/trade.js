const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tradeSchema = new Schema({
  trade: { type: String, required: false },
  
});

const Trade = mongoose.model("User", tradeSchema);

module.exports = Trade;
