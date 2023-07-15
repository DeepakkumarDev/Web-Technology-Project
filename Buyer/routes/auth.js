const express=require("express");

const controlers=require("../controller/auth");

const router=express.Router();

router.post("/register",controlers.register);

router.post("/login",controlers.login);



router.get("/",(req,res)=>{
    res.render("home");
});

router.get("/Home",(req,res)=>{
    res.render("home")
})

router.get("/SignIn",(req,res)=>{
    res.render("signin")
})
router.get("/Cart",(req,res)=>{
    res.render("cart")
})

router.get("/About",(req,res)=>{
    res.render("about")
})
router.get("/login",(req,res)=>{
    res.render("login")
})

module.exports=router;