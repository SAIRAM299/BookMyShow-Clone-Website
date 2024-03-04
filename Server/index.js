const express = require("express")
const app = express()
const userroute=require("./Route/userroute")
require("dotenv").config()
const movieroute = require("./Route/movieroute")
const theaterroute = require("./Route/theaterroute")
const dbconfig=require("./config/dbconfig")
const cors=require("cors")

app.use(cors())
app.use(express.json())
app.use("/user",userroute)
app.use("/movie",movieroute)
app.use("/theater",theaterroute)

app.get("/",(req,res)=>{
res.send("api running")
})

app.listen(7777,()=>{console.log("working")})