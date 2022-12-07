
const express =require('express');
const Post = require('../Schema/Postsection');

const noticeRoute=express.Router()


noticeRoute.post('/',async(req,res)=>{

    try{
        let {Postmessage,username}=req.body;

        const post=new Post({Postmessage,username})
        await post.save()
        res.status(201).send(post)
    }
    catch(e){
        res.send('not post')
    }
})

noticeRoute.get('/postdata',async(req,res)=>{
   
  try{

        let {Postmessage,username}=req.body;
        const allpost=await Post.find().sort({"createdAt":-1})

        res.send(allpost)
    
  }
  catch(e){
    res.send('unauthorized')
  }
})

module.exports=noticeRoute;

