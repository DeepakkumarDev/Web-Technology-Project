const express = require("express");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const retreiver=require("../retrieve/data_retrieve")

const db = mysql.createConnection({
  host: process.env.Host_db,
  user: process.env.User_db,
  password: process.env.Password_db,
  database: process.env.Database
});

const router = express.Router();

router.get("/",retreiver.home_data);

router.get("/Home", (req, res) => {
  res.render("home");
});

router.get("/SignIn", (req, res) => {
  res.render("signin");
});

router.get("/Cart", (req, res) => {
  res.render("cart");
});

router.get("/About", (req, res) => {
  res.render("about");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signinform", (req, res) => {
  res.render("signinform");
});

module.exports = router;
