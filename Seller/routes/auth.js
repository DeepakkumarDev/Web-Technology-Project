const express=require("express");

const multer= require("multer");

const controlers=require("../controller/auth");

const upload=multer({dest:"../upload/"})
const router=express.Router();


router.post("/login",controlers.login);

router.post("/addproduct",upload.array('files'),controlers.addproduct);

module.exports=router;