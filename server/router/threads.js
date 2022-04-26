const router = require('express').Router();
const jwt = require('jsonwebtoken');

const Thread = require('../models/thread.model');
const verify = require('../auth/verifyToken');

module.exports = router;