const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/user");
const Trade = require("../models/trade");

router.get("/api/trades/", (req, res) => {
  Trade.find({}).sort({ date: -1 })
    .then((dbTrade) => {
      res.json(dbTrade);
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
// router.post("/api/trades", ({ body }, res) => {
//   console.log(body);
//   Trade.create(body)
//     .then(({ _id }) =>
//       User.findOneAndUpdate(
//         { userID: body.userID },
//         { $push: { trades: _id } },
//         { new: true }
//       )
//     )
//     .then((dbUser) => {
//       res.json(dbUser);
//       console.log("Trade updated", dbUser);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
//   console.log("Successfully into db.");
// });

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
    .then(({ _id }) =>
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
