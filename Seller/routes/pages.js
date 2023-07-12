const express=require("express");

const router=express.Router();

router.get("/",(req,res)=>{
    res.render("home");
});

router.get("/home",(req,res)=>{
    res.render("home")
})

router.get("/login",(req,res)=>{
    res.render("login")
})
router.get("/addproduct",(req,res)=>{
    res.render("addproduct")
})

router.get("/feedback",(req,res)=>{
    res.render("feedback")
})
router.get("/salehistory",(req,res)=>{
    res.render("salehistory")
})


module.exports=router;