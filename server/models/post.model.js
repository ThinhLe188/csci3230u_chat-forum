const mongoose = require('mongoose');

const Post = new mongoose.Schema({
    creatorId: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    upVotes: {
        type: Number,
        default: 0
    },
    downVotes: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
    tags: [String],
    image: String,
},{
    collection: 'posts'
})

module.exports = mongoose.model('posts', Post);