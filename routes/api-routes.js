const router = require("express").Router();
// const db = require("../models");
const mongoose = require("mongoose");
const User = require("../models/user");

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

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> develop
