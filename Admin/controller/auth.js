const express = require("express");
const mysql= require("mysql");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const { render } = require("express/lib/response");

const db = mysql.createConnection({
  host: process.env.Host_db_a,
  user: process.env.User_db_a,
  password: process.env.Password_db_a,
  database: process.env.Database_a
});



exports.addseller = (req, res) => {
  const { s_id, s_name, comp_name, email_id, phone, username_s, password, cpassword, id_A } = req.body;

  db.query("SELECT Comp_name FROM seller WHERE Comp_name = ?", [comp_name],async (err, result) => {
    if (err) {
      console.log("this the error ", err);
    } else if (result.length > 0) {
      return res.render("login_a", {
        message: "Your email id already exists"
      });
    } else if (password !== cpassword) {
      return res.render("login_a", {
        message: "Your password does not match. Please enter the password again"
      });
    } else {

console.log(s_name )
      //let passwordhash=await bcrypt.hash(password,8);
     // console.log(passwordhash);
     // this my commit for create pull request
      db.query("INSERT INTO Seller VALUES (?, ?, ?, ?, ?, ?, ?, ? )", [ s_id, s_name, comp_name, email_id, phone, username_s, password, id_A], (err, result) => {
        if (err) {
          console.log("this the error ", err);
        } else {
          console.log("Insertion was successful");
          return res.render("home", {
            message: "Seller added successfully"
          });
        }
      });
    }
  });
};


exports.login_a = (req, res) => {
  const { Username_A, password} = req.body;

  db.query("SELECT * FROM admin WHERE Username_A = ?", [Username_A], async (err, result) => {
    if (err) {
      console.log("this the error ", err);
    } else if (result.length > 0) {
      console.log(result);

      //await bcrypt.compare(password, result[0].password, (err, match) => {


        if (result[0].password===password) {
          res.render("home", { message: "you are logged in"+result[0].Username_A });
        } else {
          res.render("login", { message: "Your password is incorrect" });
        }
      //});
    }
  });
};
