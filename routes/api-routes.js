const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/user");
const Trade = require("../models/trade");

router.get("/api/trades/", (req, res) => {
  Trade.find({})
    .sort({ date: -1 })
    .then((dbTrade) => {
      res.json(dbTrade);
    })
    .catch((err) => {
      res.json(err);
    });
});

// router.get("/api/mytrades", (req, res) => {
//   User.find({})
//     .populate("trades")
//     .sort({ date: -1 })
//     .then((dbTrade) => {
//       res.json(dbTrade);
//       console.log(dbTrade)
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

router.get("/api/mytrades", ({ body }, res) => {
  User.find( body)
    .then((dbTrade) => {
      console.log("TestDBTrade:", dbTrade);
      // console.log("From Mytrades:", dbTrade)
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/claims", ({ body }, res) => {
  User.findOneAndUpdate(
    { userID: body.userID },
    { $push: { claimed: _id } },
    { new: true }
  )
    .then((dbUser) => {
      res.json(dbUser);
      console.log("Claim updated", dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
  console.log("Successfully into db.");
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

// router.get("/api/user/", (req, res) => {
//   User.find({ city })
//     .then((userCity) => {
//       res.json(userCity);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

router.get("/api/user", (req, res) => {
  User.findById(req.params.id)
    .then((userEmail) => {
      res.json(userEmail);
      console.log("Found userEmail", userEmail);
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
      User.findOneAndUpdate(
        { userID: body.userID },
        // finds Trade Post and pushes transaction id onto User
        { $push: { trades: _id } },
        { new: true }
      )
    )
    .then(({ _id }) =>
    // updates trade post transaction with user who created post
      Trade.findOneAndUpdate({ $push: { userID: userID } }, { new: true })
    )
    .then((dbUser) => {
      res.json(dbUser);
      console.log("Trade updated", dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
  console.log("Successfully into db.");
});


module.exports = router;

