const jwt=require("jsonwebtoken")
require("dotenv").config()
const authentication=(req,res,next)=>{

    const token=req.headers.authorization.split(" ")[1]

    jwt.verify(token,process.env.SECRET_KEY,(err,decode)=>{
        if(err){
            res.send({"err":"Something wrong please login again"})
        }
        else{
            let {user_id}=decode
            req.body.user_id=user_id
            next()
        }
    })
}

module.exports={
    authentication
}