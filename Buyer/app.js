const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file

const app = express();

const publicDic=path.join(__dirname,'./public');
app.use(express.static(publicDic));
console.log(publicDic);

const db = mysql.createConnection({
  host: process.env.Host_db,
  user: process.env.User_db,
  password: process.env.Password_db,
  database: process.env.Database
});

db.connect((err) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("Database connection is successful");
  }
});

app.set("view engine","hbs"); 

app.use("/",require("./routes/pages"));

app.get("/", (req, res) => {
  res.send("<h1>Buyer interface</h1>");
});



app.listen(3050, () => {
  console.log("Server is running on port 3050");
});
