const mongoose =require("mongoose")
mongoose.connect("mongodb+srv://sana:22k91a66f3@cluster0.qt94kpc.mongodb.net/")
const User=mongoose.model('User',{name:String,email:String,password:String})
const user=new User({
    name:"sana",
    email:"example@gmail.com",
    password:"123456"
})
user.save();