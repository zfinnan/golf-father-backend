const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const commentsSchema = new Schema({
    comments: {
        type: String,
        required: true
    }
});

module.exports = Comment = mongoose.model('Comment', commentsSchema);