const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ballyhoo"
);

const userSeed = [
  {
    name: "Joe Bob",
    email: "joebob@gmail.com",
    password: "password123",
    zipcode: 98052,
    date: new Date(Date.now()),
  },
  {
    name: "Jane Doe",
    email: "janeDoe@gmail.com",
    password: "password456",
    zipcode: 98052,
    date: new Date(Date.now()),
  },
  {
    name: "Donny Dingle",
    email: "donDingle@yahoo.com",
    password: "password789",
    zipcode: 98052,
    date: new Date(Date.now()),
  },
  {
    name: "Apple Box",
    email: "boxApple@yahoo.com",
    password: "123password",
    zipcode: 98052,
    date: new Date(Date.now()),
  },
  {
    name: "Mike Hunt",
    email: "mike@hotmail.com",
    password: "456password",
    zipcode: 98052,
    date: new Date(Date.now()),
  },
  {
    name: "Charlie Angel",
    email: "ca@gmail.com",
    password: "789password",
    zipcode: 98052,
    date: new Date(Date.now()),
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
