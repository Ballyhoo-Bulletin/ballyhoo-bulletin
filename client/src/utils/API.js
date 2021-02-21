import axios from "axios";

export default {
  // Gets all posts

  getTrade: function () {
    return axios.get("/api/post");
  },
  // Gets the post with the given id
  getTrade: function (id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the post with the given id
  deleteTrade: function (id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a post to the database
  saveTrade: function (tradeData) {
    return axios.post("/api/posts", tradeData);
  },

  likeDislike: function (id, action) {
    return axios.put("/api/posts/" + id, { action });
  },
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
    return axios.post("/api/user", userData);
  },

  saveTrade: function (tradeData) {
    return axios.post("/api/trades", tradeData);
  },
};
