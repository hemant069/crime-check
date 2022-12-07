const express =require('express')
const User = require('../Schema/user')
const loginRoute=express.Router()


loginRoute.post('/',async(req,res)=>{

    try{
        const {username}=req.body
        const login=new User({username})
        await login.save()
        res.status(201).send(login)
    }
    catch(e){
        res.sendStatus(401).send('unauthorized')
    }


})

module.exports=loginRoute

