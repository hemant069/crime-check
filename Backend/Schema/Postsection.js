const { Schema, model } = require("mongoose");


const Postmodel=new Schema({
    Postmessage:String,
    username:String,
  


},{timestamps:true}

)


const Post=model('post',Postmodel)

module.exports=Post;