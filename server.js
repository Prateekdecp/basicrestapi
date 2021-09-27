const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cors=require("cors");

app.use(cors());
app.use(express.json())

//import routes
const postroutes=require("./routes/posts");
app.use("/posts",postroutes);

require('dotenv/config')
//routes
app.get('/',(req,res)=>{
    res.send("we are at home");
})


mongoose.connect(process.env.url,{useNewUrlParser:true},()=>{
    console.log("connected to database")
})

app.listen(3000);