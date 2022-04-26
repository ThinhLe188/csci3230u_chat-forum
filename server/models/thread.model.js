const mongoose = require('mongoose');

const Thread = new mongoose.Schema({
    creatorId: {
        type: String,
        required: true
    },
    parentId: {
        type: String,
        required: true,
        default: '-1'
    },
    content: {
        type: String,
        required: true
    },
    votes: {
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
    collection: 'threads'
})

module.exports = mongoose.model('threads', Thread);