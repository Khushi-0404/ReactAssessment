const express=require('express')
const router=express.Router()
const usermodel=require('../Model/UserModel')
const jwt=require('jsonwebtoken')
const cookie=require('cookie-parser')
router.post('/loginadmin',async (req,res)=>{
    const data=req.body 
    try{
        const result=await usermodel.findOne({email:data.email})
        console.log(result)
        if(result){
            if(result.password===data.password &&result.role=="admin"){
                const token=jwt.sign({email:data.email ,role:result.role},'jamesbond')
                res.status(200).cookie('authorizer',token,{sameSite:'strict',httpOnly:true,maxAge:3600000})
                res.send({"msg":'you are authenticated',"status":true,"accesstoken":token})
            }
            else{
                res.send({"msg":'check your password , not authenticated',"status":false})
            }
        }
        else{
            res.send({"msg":'the email id does not exists',"status":false})
        }
       
    }
    catch(e){
        res.send({'msg':'some error occured',"status":false})
    }
   
})

module.exports=router