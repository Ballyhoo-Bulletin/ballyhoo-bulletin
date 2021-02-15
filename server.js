const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
// const user = require("./routes/api/user");
// const trade = require("./routes/api/trade");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/ballyhoo',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use("/api/user", user)
app.use("/api/trade", trade)

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
