const express=require("express")
const morgan=require("morgan")
const dotenv=require("dotenv")

dotenv.config({
    path:"./config.env"
})

//Creating a New App
const app=new express();

//Middleware
app.use(morgan("dev"))


module.exports=app