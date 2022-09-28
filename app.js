const express = require('express');
const app = express()

app.get("",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.get("/home",(req,res)=>{
    res.sendFile(__dirname + "/home.html")
})
app.get("/about",(req,res)=>{
    res.sendFile(__dirname + "/about.html")
})
app.get("/documents",(req,res)=>{
    res.sendFile(__dirname + "/documents.html")
})

app.listen(3000,()=>{
    console.log("Server starting up at port: 3000")
})