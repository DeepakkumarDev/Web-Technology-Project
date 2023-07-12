const express=require("express");

const router=express.Router();

router.get("/",(req,res)=>{
    res.render("home");
});

router.get("/Home",(req,res)=>{
    res.render("home")
})

router.get("/login_a",(req,res)=>{
    res.render("login_a")
})
router.get("/addseller",(req,res)=>{
    res.render("addseller")
})

router.get("/buyerinfo",(req,res)=>{
    res.render("buyerinfo")
})
router.get("/sellerinfo",(req,res)=>{
    res.render("sellerinfo")
})

module.exports=router;