const http=require("http")
const express = require("express");
const morgan = require("morgan");
const app=require("./app/app")


const PORT=process.env.PORT||2020

//TODO Creating Server with express
const server=http.createServer(app)

//server Listening
server.listen(PORT,()=>{
    console.log(`Server is Listening to Port ${PORT} `)
})

