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
