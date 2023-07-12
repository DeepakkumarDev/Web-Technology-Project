const express=require("express");

const controlers=require("../controller/auth");

const router=express.Router();

router.post("/addseller",controlers.addseller);

router.post("/login_a",controlers.login_a);







module.exports=router;