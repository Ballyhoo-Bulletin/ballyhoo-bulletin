const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/__________________"
);

const userSeed = [
  {
    name: "Joe Bob",
    dob: 01/01/1990,
    email: "joebob@gmail.com",
    trade: " ",
    password: "password123",
    zipcode: 98052,
    date: new Date(Date.now()),
  },
  {
    name: "Jane Doe",
    dob: 02/02/1989,
    email: "janeDoe@gmail.com",
    trade: " ",
    password: "password456",
    confirm: true,
    zipcode: 98052,
    date: new Date(Date.now()),
  },
  {
    name: "Donny Dingle",
    dob: 03/03/1988,
    email: "donDingle@yahoo.com",
    trade: " ",
    password: "password789",
    confirm: true,
    zipcode: 98052,
    date: new Date(Date.now()),
  },
  {
    name: "Apple Box",
    dob: 03/03/1988,
    email: "boxApple@yahoo.com",
    trade: " ",
    password: "123password",
    confirm: true,
    zipcode: 98052,
    date: new Date(Date.now()),
  },
  {
    name: "Mike Hunt",
    dob: 04/04/1987,
    email: "mike@hotmail.com",
    skills: " ",
    password: "456password",
    confirm: true,
    zipcode: 98052,
    date: new Date(Date.now()),
  },
  {
    name: "Charlie Angel",
    dob: 04/04/1987,
    email: "ca@gmail.com",
    skills: " ",
    password: "789password",
    confirm: true,
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
