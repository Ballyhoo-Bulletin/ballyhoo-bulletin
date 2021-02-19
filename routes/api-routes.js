const router = require("express").Router();
// const db = require("../models");
const mongoose = require("mongoose");
const User = require("../models/user");
//bring in post model here;

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

//need to create a few routes for creating, updating, deleting , and reading posts
//example post thumbsup or thumbsdown
router.put("/api/posts/:id", ({ body: { action }, params }, res) => {
  //depending on action, "thumbsup/thumbsdown"
  console.log("Your action -", params.id, action);
  //Post.findByIdAndUpdate(req.params.id, {$set:{likes:+1}})
  //if successful, res.json(something) to resolve promise and tell frontend to update UI
  res.json("ok");
});

module.exports = router;
