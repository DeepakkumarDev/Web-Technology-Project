const express = require("express");
const mysql= require("mysql");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");

const db = mysql.createConnection({
  host: process.env.Host_db_s,
  user: process.env.User_db_s,
  password: process.env.Password_db_s,
  database: process.env.Database_s
});



exports.login = (req, res) => {
  const { username_S, password} = req.body;

  db.query("SELECT * FROM Seller WHERE username_S= ?", [username_S], async (err, result) => {
    console.log(result,username_S,password);
    if (err) {
      console.log("This is the error ", err);
    } else if (result.length > 0) {
      console.log(result);

      //await bcrypt.compare(password, result[0].password, (err, match) => {


        if (result[0].Password===password) {
          res.render("home", { message: "you are logged in"+result[0].username_S });
        } else {
          res.render("login", { message: "Your password is incorrect" });
        }
      //});
    }else{
      
      return res.render('login',{message:"user name is is not found"})
    }
  });
};


exports.addproduct = (req, res) => {
  
         const image=req.file;
        //block to store the name of images
        //**************************************************************** */
        /*
        str_image='{';
        let i=0;
         for (const file of image) {
          
          const {filename} = file;

          str_image+='"'+i+'":"'+filename+'",';
          i++;
         }
         
         // this for ignoreing last comma 
         str_image= str_image.slice(0,-1);
         str_image+='}';
         
         //var obj;
         //obj+= JSON.parse(str_image);
         //console.log(str_image);
         //console.log(obj);

         //******************************************s**************** */
         console.log(image);

           const {filename} =image;

           str_image=filename;


  
         const { categori, Product_name, Product_price, Product_BrandID, Product_weight, Product_stock, Product_location } = req.body;
         

         console.log(typeof(Product_BrandID));



         db.query("SELECT * FROM Product_categories WHERE category_name=?",[categori],async (err, result) => {
           if (err) {
             console.log("this the error ", err);
           } else if (result.length < 0) {

             return res.render("addproduct", {
               message: "products type does not exist "
             });
           } else {


            console.log(result[0].category_id);
            product_cat_id=result[0].category_id;

       
             //let passwordhash=await bcrypt.hash(password,8);
            // console.log(passwordhash);
            // this my commit for create pull request
            db.query("INSERT INTO Products(Product_name, Product_price, Product_image, Product_BrandID, Product_weight, Product_stock, Product_location,Product_category_id, id_A, Seller_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [Product_name, Product_price, str_image, Product_BrandID, Product_weight, Product_stock, Product_location,product_cat_id,"2023",123], (err, result) => {

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


