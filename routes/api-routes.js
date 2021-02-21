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
// app.get(‘/account’, (req, res) => {
//   if(!req.session.user) {
//       res.redirect(‘/login’);
//   } else {
//       res.render(‘account’, {user: req.session.user});
//   }
// });
router.get("/api/user/", (req, res) => {
  User.find({ city })
    .then(({ _id }) => {
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
      User.findOneAndUpdate(
        { userID: body.userID },
        { $push: { trades: _id } },
        { new: true }
      )
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
// router.post(“/api/trades/:id”, ({ body, params }, res) => {
//   console.log(req.params.id);
//   Trade.create(body)
//     .then(() =>
//       User.findOneAndUpdate(
//         {
//           _id: req.params.id,
//         },
//         {
//           $set: {
//             trades: req.body.trades,
//           },
//         },
//         { new: true }
//       )
//     )
//     .then((dbUser) => {
//       res.json(dbUser);
//       console.log(“Trade updated”, dbUser);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
//   console.log(“Successfully into db.“);
// });
module.exports = router;

// const router = require("express").Router();
// const mongoose = require("mongoose");
// const User = require("../models/user");
// const Trade = require("../models/trade");

// router.get("/api/trades", (req, res) => {
//   Trade.find({})
//     .then((dbTrade) => {
//       res.json(dbTrade);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// // router.get("/api/trades/", (req, res) => {
// //   Trade.find({})
// //     .then((dbTrade) => {
// //       res.json(dbTrade);
// //     })
// //     .catch((err) => {
// //       res.json(err);
// //     });
// // })

// router.get("/api/user/", (req, res) => {
//   User.find({})
//     .then((dbUser) => {
//       res.json(dbUser);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// router.post("/api/user", ({ body }, res) => {
//   User.create(body)
//     .then((userInfo) => {
//       res.json(userInfo);
//       console.log("User into DB", userInfo);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

//need to create a few routes for creating, updating, deleting , and reading posts
//example post thumbsup or thumbsdown
router.put("/api/posts/:id", ({ body: { action }, params }, res) => {
  //depending on action, "thumbsup/thumbsdown"
  console.log("Your action -", params.id, action);
  //Post.findByIdAndUpdate(req.params.id, {$set:{likes:+1}})
  //if successful, res.json(something) to resolve promise and tell frontend to update UI
  res.json("ok");
});

// router.post("/api/trades", ({ body }, res) => {
//   console.log(body);
//   Trade.create(body)
//     .then(({ _id }) =>
//       User.findOneAndUpdate({}, { $push: { trades: _id } }, { new: true })
//     )
//     .then((dbUser) => {
//       res.json(dbUser);
//       console.log("Trade updated", dbUser);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
//     console.log("Successfully into db.")
// });

// module.exports = router;
