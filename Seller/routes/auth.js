const express=require("express");

const controlers=require("../controller/auth");

const router=express.Router();

console.log("auth file is loDED")

router.post("/login",controlers.login);


module.exports=router;