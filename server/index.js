const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
        console.log(`Connected to MongoDB`);
    })
    .catch((error) => console.log(error.message));

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));


