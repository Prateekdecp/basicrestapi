const { Router, json } = require("express");
const express=require("express");
const router=express.Router();

const Post=require('../models/Post')

router.get('/',async (req,res)=>{
    try{
        const posts=await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});  
    }
})

//create
router.post('/',async (req,res)=>{
    const post = new Post({
        username:req.body.username,
        password:req.body.password,
        phone_num:req.body.phone_num
    })
    try{
        const savedpost=await post.save();
        res.json(savedpost);
    }catch(err){
        res.json({message:err});
    }
})

//get
router.get('/:PostId',async (req,res)=>{
    try{
    const data=await Post.findById(req.params.PostId);
    res.json(data);
    }catch(err){
        res.json({message:err});
    }
})

//delete
router.delete('/:PostId',async (req,res)=>{
    try{
    const removeddata=await Post.deleteOne({_id:req.params.PostId});
    res.json(removeddata);
    }catch(err){
        res.json({message:err});
    }
})

//update
router.patch('/:PostId',async (req,res)=>{
    try{
    const data=await Post.updateOne({_id:req.params.PostId},{$set:{username:req.body.username}});
    res.json(data);
    }catch(err){
        res.json({message:err});
    }
})

module.exports=router
