const mongoose = require('mongoose');

const Comment = new mongoose.Schema({
    parentId: {
        type: String,
        required: true
    },
    childId: {
        type: String,
        required: true
    },
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
    collection: 'comments'
})

module.exports = mongoose.model('comments', Comment);