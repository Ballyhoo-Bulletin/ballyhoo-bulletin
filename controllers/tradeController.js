const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then((dbTrade) => res.json(dbTrade))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    // populate the TradeCard
    db.User.findById(req.params.id)
      .then((dbTrade) => res.json(dbTrade))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    // create a Trade Post?
    db.User.create(req.body)
      .then((dbTrade) => res.json(dbTrade))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then((dbTrade) => dbTrade.remove())
      .then((dbTrade) => res.json(dbTrade))
      .catch((err) => res.status(422).json(err));
  },
};
