const { Int32 } = require("bson")
const mongoose=require("mongoose")
const taskSchema=new mongoose.Schema({
    title:{
        type:mongoose.Schema.Types.String,
        required:true
    },
    text:{
        type:mongoose.Schema.Types.String,
        required:true
    },
    numOfPages:{
        type:Int32,
        default:0

    }
},
{
    timestamps:true
})
module.exports=mongoose.model("Article",taskSchema)