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

router.get("/home",retreiver.home_data);

router.post("/add_to_cart",retreiver.add_to_cart);

router.post("/order_item",retreiver.order_item);


router.post("/order_buyer_details",retreiver.order_buyer_details);


router.get("/", retreiver.home_data);


router.get("/SignIn", (req, res) => {
  res.render("signin");
});

router.get("/buyerdetails", (req, res) => {
  res.render("buyerdetails");
});

router.get("/cart",retreiver.cart_data);

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
