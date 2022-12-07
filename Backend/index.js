const express=require('express')
const mongoose=require('mongoose')
const loginRoute=require('./Routes/Login')
const noticeRoute = require('./Routes/Noticepage')
require('dotenv').config()

const app=express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/login',loginRoute)

app.use('/post',noticeRoute)



const PORT=process.env.PORT||8080
 mongoose.connect(process.env.MONGO).then(()=>{
 app.listen(PORT,()=>{console.log('server started on port 8080')})
})