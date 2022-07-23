const express= require("express")
const cors =require("cors")
const mongoose=require("mongoose")
const AuthRoute=require('./routes/auth')
const router =require("./routes/routes")
const { param } = require('express/lib/request');

const PORT =process.env.PORT || 8080

const app =express();

app.use(express.json())

app.use(cors())

app.use('/',router)

app.use('/',AuthRoute)


const URI="mongodb+srv://uma:todoapp@cluster0.pk6yhts.mongodb.net/todo?retryWrites=true&w=majority"
mongoose.connect(URI).then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running in ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})
