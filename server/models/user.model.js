const nanoid = require('nanoid');
const mongoose = require('mongoose');

const User = new mongoose.Schema({
    _id: {type: String, default: () => nanoid()},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
},{
    collection: 'users'
})

module.exports = mongoose.model('users', User);