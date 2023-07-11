const express=require("express");

const controlers=require("../controller/auth");

const router=express.Router();

router.post("/register",controlers.register);

router.post("/login",controlers.login);







module.exports=router;