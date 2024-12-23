const mongoose=require("mongoose")
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.URI)
    }
    catch(err){
        console.error("error connection to db\n"+err)
    }
}
module.exports=connectDB