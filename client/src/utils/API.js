import axios from "axios";

export default {
  // Gets all trades
  getTrade: function () {
    return axios.get("/api/trades");
  },
  // Gets the trades with the given id
  // getTrade: function (id) {
  //   return axios.get("/api/trades/" + id);
  // },
  // Deletes the trades with the given id
  deleteTrade: function (id) {
    return axios.delete("/api/trades/" + id);
  },
  // Saves a trades to the database
  saveUser: function (userData) {
    return axios.post("/api/signup", userData);
    
  },

  saveTrade: function (tradeData) {
    return axios.post("/api/trades", tradeData);
  },
};
