
const express=require("express")
const { connection } = require("./config/db")
const cors=require("cors")
const { userRoute } = require("./routes/User.route")
require("dotenv").config()
const app=express()
app.use(express.json())
app.use(cors())

app.use("/",(req,res)=>{
    res.send("Welcome")
})
app.use("/",userRoute)
app.listen(process.env.PORT,async()=>{

    try{
        await connection
        console.log("DB connected successfuly")
    }catch(err){
        console.log("DB not connected")
        console.log(err)
    }
})