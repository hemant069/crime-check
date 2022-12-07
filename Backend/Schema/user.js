const { Schema, model } = require("mongoose");


const userModel=new Schema({
    username:String,
})


const User=model('userlogin',userModel)

module.exports=User