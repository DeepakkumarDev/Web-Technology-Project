const express=require("express");
const mysql=require("mysql");
const path=require("path");
const dotenv=require("dotenv");
const exp = require("constants");
const multer = require('multer');
const exphbs = require('express-handlebars');



const app=express();
app.set("view engine",'hbs')

dotenv.config({path:"./.env"})
//this the file where the image going to store

const publicDirc=path.join(__dirname,"./public");
app.use(express.static(publicDirc));
console.log(publicDirc);


app.use(express.urlencoded({extended:false}));
console.log(express.json());


const db = mysql.createConnection({
  host: process.env.Host_db_s,
  user: process.env.User_db_s,
  password: process.env.Password_db_s,
  database: process.env.Database_s
});


db.connect((err)=>
{
    if(err){
        console.log("Error occuren ",err);

    }else{
        console.log("Data  base connectioin sucessful ");
    } 
})




app.use("/auth",require('./routes/auth'))

app.use("/",require("./routes/pages"));




app.listen(3030,()=>
{
    console.log("server successfully started 3030 ");
});
