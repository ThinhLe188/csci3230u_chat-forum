const mongoose = require('mongoose');

const Comment = new mongoose.Schema({
    _id: {type: String, default: () => nanoid()},
    parentId: {type: String, required: true},
    childId: {type: String, required: true},
    creatorId: {type: String, required: true},
    content: {type: String, required: true},
    upVotes: {type: Number, default: 0},
    downVotes: {type: Number, default: 0},
    tags: [String],
    image: String,
    date: {type: Date, default: new Date()},
},{
    collection: 'comments'
})

module.exports = mongoose.model('comments', Comment);