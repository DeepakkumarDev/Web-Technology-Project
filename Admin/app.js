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
  host: process.env.Host_db_a,
  user: process.env.User_db_a,
  password: process.env.Password_db_a,
  database: process.env.Database_a
});

db.connect((err) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("Database connection is successful");
  }
});

app.use(express.urlencoded({extended:false}));
console.log(express.json());

app.set("view engine","hbs"); 

app.use("/",require("./routes/pages"));

app.use("/auth",require("./routes/auth"));



app.listen(3020, () => {
  console.log("Server is running on port 3050");
});
