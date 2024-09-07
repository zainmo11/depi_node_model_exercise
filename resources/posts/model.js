const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: false
    },
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
