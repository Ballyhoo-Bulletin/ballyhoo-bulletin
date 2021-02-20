import axios from "axios";

export default {
  

  getTrade: function () {
    return axios.get("/api/trades");
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

  // getUser: function (userData) {
  //   console.log("User data entered", userData);
  //   return axios.post("/api/user/" + id);
  // },

  saveTrade: function (tradeData) {
    console.log("Trade data entered", tradeData);
    return axios.post("/api/trades", tradeData);
  },
};
