const express=require("express")
const router=express.Router()
const tasks=require("../models/tasks");

router.post("/",async(req,res)=>{
    const {name}=req.body
    const task1=await tasks.create({name:name})
    res.json(task)
})
module.exports=router