const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/user");
const Trade = require("../models/trade");
router.get("/api/trades/", (req, res) => {
  Trade.find({})
    .then((dbTrade) => {
      res.json(dbTrade);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/trades/:id", (req, res) => {
  // console.log(req.data.userID);
  console.log(req.params.id);
  User.findOne({ userID: req.params.id }).then((dbUser) => {
    console.log("This is the history", dbUser);
    Trade.find({city: dbUser.city})
      .sort({ date: -1 })
      .then((dbTrade) => {
        res.json(dbTrade);
      })
      .catch((err) => {
        res.json(err);
      });
  });
});

router.get("/api/mytrades/:id", (req, res) => {
  // console.log(req.data.userID);
  console.log(req.params.id);
  User.findOne({ userID: req.params.id }).then((dbUser) => {
    console.log("This works", dbUser);
    Trade.find({userID:req.params.id})
      .sort({ date: -1 })
      .then((dbTrade) => {
        res.json(dbTrade);
      })
      .catch((err) => {
        res.json(err);
      });
  });
});

// router.get("/api/trades/", (req, res) => {
//   Trade.find({city})
//     .sort({ date: -1 })
//     .then((dbTrade) => {
//         res.json(dbTrade);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

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
  User.find({})
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
  User.findOne({userID: body.userID }).then((dbUser) =>{
    Trade.create({...body, city: dbUser.city, email:dbUser.email})
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
  })
  console.log("Successfully into db.");
});

module.exports = router;
