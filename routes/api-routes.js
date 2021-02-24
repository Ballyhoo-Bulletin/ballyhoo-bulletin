import axios from "axios";

export default {

  getTrade: function (userID) {
    console.log(userID);
    return axios.get("/api/trades/" + userID);
  },

  getMyTrade: function (userID) {
    console.log(userID);
    return axios.get("/api/mytrades/" + userID);
  },

  // getTrade: function (id) {
  //   return axios.get("/api/trades/" + id);
  // },

  // deleteTrade: function (id) {
  //   return axios.delete("/api/trades/" + id);
  // },

  saveUser: function (userData) {
    console.log("User data entered", userData);
    return axios.post("/api/user", userData);
  },

  getUser: function (userData) {
    console.log("User data entered", userData);
    return axios.get("/api/user", userData);
  },

  // getUser: function(id) {
  //   console.log("User id is:",id);
  //   return axios.get("/api/user/", id);
  // },
  // claimTrade: function (tradeData) {
  //   console.log("Claim trade iniated", tradeData);
  //   return axios.post("/api/claims", tradeData);
  // },
  saveTrade: function (tradeData) {
    console.log("Trade data entered", tradeData);
    return axios.post("/api/trades", tradeData);
  },
};





// const router = require("express").Router();
// const mongoose = require("mongoose");
// const User = require("../models/user");
// const Trade = require("../models/trade");
// const Image = requrie("../models/image");
// const upload = require("../config/multerConfig");
// const tradeController = require("../controllers/tradeController");
  

// router.get("/api/trades/", (req, res) => {
//   Trade.find({})
//     .then((dbTrade) => {
//       res.json(dbTrade);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });
// app.get(‘/account’, (req, res) => {
//   if(!req.session.user) {
//       res.redirect(‘/login’);
//   } else {
//       res.render(‘account’, {user: req.session.user});
//   }
// });
// router.get("/api/user/", (req, res) => {
//   User.find({ city })
//     .then(({ _id }) => {
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
//       User.findOneAndUpdate(
//         { userID: body.userID },
//         { $push: { trades: _id } },
//         { new: true }
//       )
//       Image.findOneAndUpdate(
//         { imageName:req.files[0].originalname},
//         { imageUrl: req.files[0].path },
//         { imageId: "" },
//         { $push: { trades: _id } },
//          { new: true }
        
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


// // router.post(“/api/trades/:id”, ({ body, params }, res) => {
// //   console.log(req.params.id);
// //   Trade.create(body)
// //     .then(() =>
// //       User.findOneAndUpdate(
// //         {
// //           _id: req.params.id,
// //         },
// //         {
// //           $set: {
// //             trades: req.body.trades,
// //           },
// //         },
// //         { new: true }
// //       )
// //     )
// //     .then((dbUser) => {
// //       res.json(dbUser);
// //       console.log(“Trade updated”, dbUser);
// //     })
// //     .catch((err) => {
// //       res.json(err);
// //     });
// //   console.log(“Successfully into db.“);
// // });
// module.exports = router;


// =======================================================================================




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
