const router = require('express').Router();
const jwt = require('jsonwebtoken');

const Thread = require('../models/thread.model');
const verify = require('../auth/verifyToken');

// Get posts
router.get('/', verify, async (req, res) => {

}),

// Get user's posts
router.get('/user/', verify, async (req, res) => {

})

// Add new posts
router.post('/', verify, async (req, res) => {
  // User data validation
  const token = req.header('auth-token');
  const verified = jwt.verify(token, process.env.TOKEN_SECRET);
  // Create a new thread
  const thread = new Thread ({
    creatorId: verified.id,
    content: req.body.content,
    title: req.body?.title,
    tags: req.body?.tags,
    image: req.body?.image
  })
  try {
    const newThread = await thread.save();
    res.status(201).send({
      id: thread._id,
      msg: 'Post added successfully'
    });
  } catch (err) {
    res.status(400).send(err);
  }
}),

// Add new comment or sub-comment
router.post('/:id', verify, async (req, res) => {
  // User data validation
  const token = req.header('auth-token');
  const verified = jwt.verify(token, process.env.TOKEN_SECRET);
  // Create a new child thread
  const thread = new Thread ({
    creatorId: verified.id,
    parentId: req.params.id,
    content: req.body.content,
    tags: req.body?.tags,
    image: req.body?.image
  })
  try {
    const newThread = await thread.save();
    res.status(201).send({
      id: thread._id,
      msg: 'Comment added successfully'
    });
  } catch (err) {
    res.status(400).send(err);
  }
}),

// Update posts or comments
router.patch('/:id', verify, async (req, res) => {

}),

// Update votes for posts or comments
router.patch('/vote/:id', verify, async (req, res) => {

}),

// Delete posts or comments
router.delete('/:id', verify, async (req, res) => {

})


module.exports = router;