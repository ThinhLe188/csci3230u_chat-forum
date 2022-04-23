const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('./models/user.model');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/chat-forum', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`Connected to MongoDB`);
    })
    .catch((error) => console.log(error.message));

app.post('/register', async (req, res) => {
    console.log(req.body);
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword,
        })
        res.json({ status: 'ok' })
    } catch (err) {
        res.json({ status: 'error', error: 'Invalid register' })
    }
})

app.post('/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
    })

    if (!user) {
        return res.json({ status: 'error', error: 'Invalid login' })
    }

    const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
    )

    if (isPasswordValid) {
        const token = jwt.sign(
            {
                username: user.username,
                email: user.email,
            },
            'chatforum'
        )
        return res.json({ status: 'ok', token: token })
    } else {
        return res.json({ status: 'error', token: false })
    }
})

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));


