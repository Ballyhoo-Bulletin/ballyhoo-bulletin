const router = require("express").Router();
// const db = require("../models");
const mongoose = require("mongoose");
const User = require("../models/user");
//bring in post model here;

router.post("/api/user", ({ body }, res) => {
  
  User.create(body)
    .then((userInfo) => {
      console.log("User into DB", userInfo);
      res.json(userInfo);
      console.log(body);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/trades", ({ body }, res) => {
  
  User.create(body)
    .then((trades) => {
      console.log("Tade into DB", trades);
      res.json(trades);
      console.log(body);
    })
    .catch((err) => {
      res.json(err);
    });
});

<<<<<<< HEAD
//need to create a few routes for creating, updating, deleting , and reading posts
//example post thumbsup or thumbsdown
router.put("/api/posts/:id", ({ body: { action }, params }, res) => {
  //depending on action, "thumbsup/thumbsdown"
  console.log("Your action -", params.id, action);
  //Post.findByIdAndUpdate(req.params.id, {$set:{likes:+1}})
  //if successful, res.json(something) to resolve promise and tell frontend to update UI
  res.json("ok");
});
=======
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
>>>>>>> develop

module.exports = router;
