const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const blogPostSchema = new Schema({
    content: {
        type: String
    },
    title: {
        type: String
    },
    author: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
    },
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = BlogPost = mongoose.model('BlogPost', blogPostSchema);