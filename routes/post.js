const express = require('express');

const router = express.Router();

const mongoose = require('mongoose')
const requiredLogin = require('../middleware/requireLogin')
const Post = mongoose.model("Post")


router.get('/allpost',requiredLogin,(req,res) => {
    Post.find()
        .populate("postedBy","_id name")
        .then(posts => {
            res.json({posts})
        })
        .catch(err => [
            console.log(err)
        ])
})


router.post('/createpost',requiredLogin, (req,res) => {
    const {title,body,imageurl} = req.body
    console.log(title,body,imageurl);
    if (!title || !body || !imageurl ) {
        res.status.apply(422).json({error: "Please file all the boxes"})

    }
/*    console.log(req.user) */
  /*   res.send("ok")  */

  // make the password from user info undefine (not to show the password)
  req.user.password = undefined
    const post = new Post ({
        title,
        body,
       image: imageurl,
        postedBy: req.user
    })
    post.save()
        .then(result =>{
            res.json({post:result})
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/mypost',requiredLogin,(req,res) => {
    Post.find({postedBy: req.user._id})
    .populate("postedBy", "_id name")
    .then(mypost => {
        res.json({mypost})
    })
    .catch(err=> {
        console.log(err)
    })
})

module.exports = router