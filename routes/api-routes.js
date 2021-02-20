const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/user");
const Trade = require("../models/trade");

router.get("/api/trades", (req, res) => {
  Trade.find({})
    .then((dbTrade) => {
      res.json(dbTrade);
    })
    .catch((err) => {
      res.json(err);
    });
});

// router.get("/api/trades/", (req, res) => {
//   Trade.find({})
//     .then((dbTrade) => {
//       res.json(dbTrade);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// })

router.get("/api/user/", (req, res) => {
  User.find({})
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/user", ({ body }, res) => {
  User.create(body)
    .then((userInfo) => {
      res.json(userInfo);
      console.log("User into DB", userInfo);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/trades", ({ body }, res) => {
  console.log(body);
  Trade.create(body)
    .then(({ _id }) =>
      User.findOneAndUpdate({}, { $push: { trades: _id } }, { new: true })
    )
    .then((dbUser) => {
      res.json(dbUser);
      console.log("Trade updated", dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
    console.log("Successfully into db.")
});

module.exports = router;
