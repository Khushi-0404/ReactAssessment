const express=require('express')
const router=express.Router()
const userModel=require('../Model/UserModel')
router.post('/createadmin',(req,res)=>{
    const data=req.body
    const user1=new userModel({
        firstName:data.firstName,
        lasName:data.lastName,
        email:data.email,
        phone:data.phone,
        password:data.password,
        confirmPassword:data.confirmPassword,
        role:'admin'
    })
    user1.save().then((result)=>res.send({'msg':'signup succeeded',"status":true})).catch((e)=>{
        console.log(e)
        res.send({"msg":'some error occured try again',"status":false})})
})
module.exports=router
