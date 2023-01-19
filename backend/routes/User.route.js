require("dotenv").config()
const {Router}=require("express")
const { UserModel } = require("../models/User.model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const userRoute=Router()
userRoute.post("/signup",async(req,res)=>{
    const {userName,email,password}=req.body;
    let isExistUser=await UserModel.findOne({email})
    if(isExistUser){
        res.send({"err":"User already exist"})
    }
    else{
        bcrypt.hash(password,4,async(err,hashed)=>{
    
            if(hashed){
                try{
                    let user=new UserModel({
                        userName,email,password:hashed
                    })
                    await  user.save()
                    res.send({"msg":"Signup success"})
                }
                catch(err){
                    console.log("Something wrong")
                }
            }
            
        })
    }
})


userRoute.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const user=await UserModel.findOne({email})
    if(user){
        bcrypt.compare(password,user.password,(err,result)=>{
            if(result){
                let token=jwt.sign({user_id:_id},process.env.SECRET_KEY)
                res.send({"token":token})
            }
            else{
                res.send({"err":"Email or password is invalid please login again"})
            }
        })
    }
    
})
module.exports={
    userRoute
}