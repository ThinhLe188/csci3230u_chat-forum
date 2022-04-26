const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user.model');
const {registerValidation, loginValidation} = require('../auth/validation');
const verify = require('../auth/verifyToken');

function error_message_format(mes) {
    let newMes = mes.replaceAll('"', '');
    return newMes.charAt(0).toUpperCase() + newMes.slice(1);
}

router.post('/register', async (req, res) => {
    // User data validation
    const {error} = registerValidation(req.body);
    if (error) {
        return res.status(400).send(error_message_format(error.details[0].message));
    }
    if (await User.findOne({ email: req.body.email })) {
        return res.status(400).send('Email already exists');
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    // Create a new user
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword
    });
    try {
        const newUser = await user.save();
        res.status(201).send('Registered successfully');
    } catch (err) {
        res.status(400).send(err);
    }
})

router.post('/login', async (req, res) => {
    // User data validation
    const {error} = loginValidation(req.body);
    if (error) {
        return res.status(400).send(error_message_format(error.details[0].message));
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send('Email is not found');
    }
    // Check password
    if (!await bcrypt.compare(req.body.password, user.password)) {
        return res.status(400).send('Invalid password');
    }
    // Create JWT token
    const token = jwt.sign({id: user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).status(201).send({token: token, msg: 'Logged in'});
})

router.get('/profile', verify, async (req, res) => {
    const token = req.header('auth-token');
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await User.findById(verified.id);
    return res.status(201).send({username: user.username, email: user.email});
});

module.exports = router;