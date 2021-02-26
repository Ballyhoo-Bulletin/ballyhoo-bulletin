const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/user");
const Trade = require("../models/trade");
// const Claimed = require("../models/claimed");

// Populates Homedashboard
router.get("/api/trades/:id", (req, res) => {
  console.log(req.params.id);
  User.findOne({ userID: req.params.id }).then((dbUser) => {
    Trade.find({ city: dbUser.city })
      .sort({ date: -1 })
      .then((dbTrade) => {
        res.json(dbTrade);
      })
      .catch((err) => {
        res.json(err);
      });
  });
});
// Populates History page
router.get("/api/mytrades/:id", (req, res) => {
  // console.log(req.params.id);
  User.findOne({ userID: req.params.id }).then((dbUser) => {
    // console.log("This works", dbUser);
    Trade.find({ userID: req.params.id })
      .sort({ date: -1 })
      .then((dbTrade) => {
        res.json(dbTrade);
      })
      .catch((err) => {
        res.json(err);
      });
  });
});
// Claimed trades on History page
router.get("/api/claimed/:id", (req, res) => {
  console.log("Claimed trade", req.params.id);
  // Trade.find({ userID: req.params.id })
  //     .sort({ date: -1 })
  //     .then((dbTrade) => {
  //       res.json(dbTrade);
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
});

// router.get("/api/claimed/:id", ({body}, res) => {
//   console.log(body);
//   User.findOne({ claimed: body._id })
//     .then((dbUser) => {
//       res.json(dbUser);
//       console.log("found trade", dbUser)
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// Claiming trade
router.post("/api/claimed", ({ body }, res) => {
  // console.log(req.params.id);
  User.findOneAndUpdate(
    { userID: body.currentUser },
    { $push: { claimed: body.id } },
    { new: true }
  ).then((dbUser) => {
    console.log("This works", dbUser);
    Trade.findOneAndUpdate({}, { $push: { claimed: body.id } }, { new: true })
      .then((dbTrade) => {
        console.log("Trade updated with claim", dbTrade);
        res.json(dbTrade);
      })
      .catch((err) => {
        res.json(err);
      });
  });
});

// Creates User from signup page
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

// Creates Trades from TradePostForm
router.post("/api/trades", ({ body }, res) => {
  console.log(body);
  User.findOne({ userID: body.userID }).then((dbUser) => {
    Trade.create({ ...body, city: dbUser.city, email: dbUser.email })
      .then(({ _id }) =>
        User.findOneAndUpdate(
          { userID: body.userID },
          // finds Trade Post and pushes trade transaction id onto User
          { $push: { trades: _id } },
          { new: true }
        )
      )
      .then(({ _id }) =>
        // updates newly created trade post transaction with user who created post
        Trade.findOneAndUpdate({}, { $push: { userID: userID } }, { new: true })
      )
      .then((dbUser) => {
        res.json(dbUser);
        console.log("Trade updated", dbUser);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  console.log("Successfully into db.");
});

module.exports = router;
