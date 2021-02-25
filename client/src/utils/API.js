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


  // deleteTrade: function (id) {
  //   return axios.delete("/api/trades/" + id);
  // },

  saveUser: function (userData) {
    console.log("User data entered", userData);
    return axios.post("/api/user", userData);
  },

  
  claimTrade: function (userID) {
    console.log("Claim trade iniated", userID);
    return axios.post("/api/claims/" + userID);
  },

  saveTrade: function (tradeData) {
    console.log("Trade data entered", tradeData);
    return axios.post("/api/trades", tradeData);
  },
};
