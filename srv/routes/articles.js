const express=require("express")
const router=express.Router()
const Task=require("../models/article");
const { text } = require("body-parser");
const Article = require("../models/article");
//router.post("/",(req,res)=>{console.log("bhdlkahg");})
router.post("/",async(req,res)=>{
    const {title}=req.body
    const {text}=req.body
    // const {numOfPages}=req.body

    const article1=await Article.create({title:title,text:text,numOfPages:0})
    res.json(article1)
})
module.exports=router