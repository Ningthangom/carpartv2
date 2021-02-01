const express = require('express');

const router = express.Router();
const mongoose = require('mongoose')
const requiredLogin = require('../middleware/requireLogin')
const Post = mongoose.model("Post")
const User = mongoose.model("User")

// id is a parameter
router.get('/user/:id',requiredLogin,(req,res)=>{
    console.log("this is from backed ",req.params.id)
    //find the user and it's detail
    User.findOne({_id:req.params.id})
    console.log({_id:req.params.id})
    console.log(req.params.id)
    //selected ones here will not be shown in the front end
    // do not select password
    .select("-password")
    .then(user => {
        console.log(user)
        Post.find({postedBy:req.params.id})
        .populate("postedBy","_id name")
        .exec((err,posts)=>{
            if(err){
                return res.status(422).json({error:err})
            }
            //this will return the the user and its posts
            res.json({user,posts})
        })

    }).catch(err=> {
        return res.status(404).json({error:"User cannot be found"})
    })
})  

module.exports = router