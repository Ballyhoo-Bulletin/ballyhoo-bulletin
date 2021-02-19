const router = require("express").Router();
// const db = require("../models");
const mongoose = require("mongoose");
const User = require("../models/user");
const Trade = require("../models/trade");



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
  Trade.create(body)
  .then(({ _id }) => User.findOneAndUpdate({}, { $push: { trades: _id } }, { new: true }))
  
  .then(dbUser => {
    res.json(dbUser);
    console.log("Trade updated", dbUser);
  })
  .catch(err => {
    res.json(err);
  });
});


// week 17 act 15
// trade.create 
// user
// router.post("/api/trades", ({ body }, res) => {
//   console.log("This worked.");
//   User.create({
//   "need": req.body.needRef,
//   "trade": req.body.tradeRef,
//   "description": req.body.descriptionRef
//  })
//     .then((trades) => {
//       res.json(trades);
//       console.log(trades);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

module.exports = router;
