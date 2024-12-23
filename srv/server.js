require("dotenv").config()
const express=require("express")
const cors=require("cors")
const corsOptions=require("./config/corsOptions")
const connectDB=require("./config/dbConn")
const { default: mongoose } = require("mongoose")

const PORT=process.env.PORT||1111
const app=express()
connectDB()

app.use(cors(corsOptions))
app.use(express.json())

app.use("/api/tasks",require("./routes/tasks"))
app.use("/api/articles",require("./routes/articles"))
app.use("/",(req,res)=>{res.send("this is home page")})

mongoose.connection.once("open",()=>{
    console.log("connected to mongoDB")
    app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)})
})
mongoose.connection.on("error",err=>{console.log(err)})