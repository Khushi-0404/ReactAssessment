const mongoose= require('mongoose')
mongoose.connect("mongodb+srv://Khushi0404:Khushi0404@cluster0.lsthtau.mongodb.net/?retryWrites=true&w=majority").
then((res)=>console.log('connected to db')).
catch((e)=>console.log('error in connection',e))


const userModel=mongoose.model("RegisterUserCollection",{
    firstName:String,
    lastName:String,
    email:String,
    phone:Number,
    password:String,
    confirmPassword:String,
    role:{
        type:String,
        default:"user",
        enum:['user','admin'],
        required:true
    }
})

module.exports=userModel