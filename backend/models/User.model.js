const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    useName:String,
    email:String,
    password:String
})

const UserModel=mongoose.model("bug_trace_user",userSchema)

module.exports={
    UserModel
}