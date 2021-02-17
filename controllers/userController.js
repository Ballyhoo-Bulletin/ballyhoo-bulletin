const db = require("../models");

// module.exports = {
//     findById: function(req, res) {
//       db.User
//         .findById(req.params.id)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
    

//   };
  

module.exports = {
  findAll: function(req, res) {
    db.Trade
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    // populate the TradeCard
    db.Trade
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    // create a Trade Post?
    db.Trade
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Trade
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
