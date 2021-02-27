// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const routes = require("./routes/api-routes");
// const path = require("path");
// const PORT = process.env.PORT || 3001;
// const app = express();

// const { cloudinary } = require("./config/cloudinaryConfig");
// Define middleware here
// app.use(
//   bodyParser.urlencoded({
//     limit: " 50mb",
//     extended: true,
//     parameterLimit: 50000,
//   })
// );
// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(express.static("public"));
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Send every other request to the React app
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ballyhoo", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// app.use(routes);
// app.use("/api/user", user)
// app.use("/api/trade", trade)

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });

// app
//   .get("/server", (req, res) => {
//     res.send("Server seems to be working");
//   })
//   .listen(PORT, () => {
//     console.log(`Server is running on ${PORT}`);
//   });

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api-routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Send every other request to the React app
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ballyhoo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
app.use(routes);
// app.use("/api/user", user)
// app.use("/api/trade", trade)
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
