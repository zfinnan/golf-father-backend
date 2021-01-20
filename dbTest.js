require('dotenv').config();const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const JWT_SECRET = process.env.JWT_SECRET;
const db = require('./models')

    // db.User.findOne({ email: 'johndoe@gmail.com' })
    // .then(user => {
    //     // if email already exits, send a 400 response
    //     if (user) {
    //         return console.log('User Exists')
    //     } else {
    //         // Create a new user
    //         console.log('else statement');
    //         const newUser = new User({
    //             name: 'john doe',
    //             email: 'johndoe@gmail.com',
    //             password: 'password',
    //             phone: 5555555555,
    //             income: 200,
    //             savings: 5000,
    //             current_account_status: 1000,
    //             residence: 'Earth',
    //         });
    //         // Salt and hash the password, then save the user
    //         bcrypt.genSalt(10, (err, salt) => {
    //             // if (err) throw Error;

    //             bcrypt.hash(newUser.password, salt, (error, hash) => {
    //                 // if (error) throw Error;
    //                 // Change the password in newUser to the hash
    //                 newUser.password = hash;
    //                 newUser.save()
    //                 .then(createdUser => console.log(createdUser))
    //                 .catch(err => console.log(err));
    //             })
    //         })
    //     }
    // })

    // db.User.findOne({email: 'johndoe@gmail.com'})
    // .then(john => {
    //     // console.log(db.Comment)
    //     const newComment = new db.Comment({
    //         comments: "Hello World"
    //     })
    //     newComment.save()
        
    //     john.comments.push(newComment)
    //     john.save();

    // })

    db.User.findOne({_id: 'ObjectId("5fe0fd9ebb8c1083003fcc76")'})
    .then(user => {
        db.BlogPost.findOne({title: "FireTruck"})
        .then(post => {
            if (!post) {
                console.log("Post exist with that title")
            } else {
                const newPost = new db.BlogPost({
                    title: "Fire Truck",
                    content: "Post about firetrucks",
                    author: user
                })
                newPost.save()
            }
            user.blogpost.push(newPost)
            user.save();
        })
    })