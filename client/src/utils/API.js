import axios from "axios";

export default {
  // Gets all posts
  getTrade: function () {
    return axios.get("/api/trades");
  },
  // Gets the post with the given id
  // getTrade: function (id) {
  //   return axios.get("/api/posts/" + id);
  // },
  // Deletes the post with the given id
  deleteTrade: function (id) {
    return axios.delete("/api/trades/" + id);
  },
  // Saves a post to the database
  saveTrade: function (tradeData) {
    return axios.post("/api/trades", tradeData);
  },
};
