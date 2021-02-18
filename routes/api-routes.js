const router = require("express").Router();
// const db = require("../models");
const mongoose = require("mongoose");
const User = require("../models/user");

router.post("/api/signup", ({ body }, res) => {
  console.log("This worked.");
  User.create(body)
    .then((userInfo) => {
      res.json(userInfo);
      console.log(body);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/trades", ({ body }, res) => {
  console.log("This worked.");
  User.create(body)
    .then((trades) => {
      res.json(trades);
      console.log(body);
    })
    .catch((err) => {
      res.json(err);
    });
});

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
