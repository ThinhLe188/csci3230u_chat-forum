const router = require('express').Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const Thread = require('../models/thread.model');
const verify = require('../auth/verifyToken');

// Get all posts
router.get('/', verify, async (req, res) => {
  try {
    const posts = await Thread.find();
    res.status(200).send(posts);
  } catch (err) {
    res.status(400).send(err);
  }
}),

// Get all user's posts
router.get('/user/', verify, async (req, res) => {
  // Get user's id
  const token = req.header('auth-token');
  const verified = jwt.verify(token, process.env.TOKEN_SECRET);
  // Get posts
  try {
    const posts = await Thread.find({"creatorId": verified.id});
    res.status(200).send(posts);
  } catch (err) {
    res.status(400).send(err);
  }
})

// Get all comments of a post or a parent comment
router.get('/comment/:id', verify, async (req, res) => {
  const parentId = req.params.id;
  // Post's id validation
  if (!mongoose.Types.ObjectId.isValid(parentId)) {
    return res.status(404).send(`No post with id: ${parentId}`);
  }
  // Get comments
  try {
    const posts = await Thread.find({"parentId": parentId});
    res.status(200).send(posts);
  } catch (err) {
    res.status(400).send(err);
  }
})

// Add new posts
router.post('/', verify, async (req, res) => {
  // Get user's id
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
  const parentId = req.params.id;
  // Get user's id
  const token = req.header('auth-token');
  const verified = jwt.verify(token, process.env.TOKEN_SECRET);
  // Post's id validation
  if (!mongoose.Types.ObjectId.isValid(parentId)) {
    return res.status(404).send(`No post with id: ${id}`);
  }
  // Create a new child thread
  const thread = new Thread ({
    creatorId: verified.id,
    parentId: parentId,
    content: req.body.content,
    tags: req.body?.tags,
    image: req.body?.image
  })
  // Save child thread and update parent thread
  try {
    const newThread = await thread.save();
    const parentThread = await Thread.findById(parentId);
    const updateParentThread = await Thread.findByIdAndUpdate(parentId, {comments: parentThread.comments + 1}, {new: true})
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
  const id = req.params.id;
  // Post's id validation
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No post with id: ${id}`);
  }
  // Update thread
  try {
    const thread = await Thread.findById(id);
    const updatedThread = await Thread.findByIdAndUpdate(id, {
      content: req.body?.content,
      title: req.body?.title,
      tags: req.body?.tags,
      image: req.body?.image
    }, {new: true})
    res.status(200).send({
      id: thread._id,
      msg: 'Updated successfully'
    });
  } catch (err) {
    res.status(400).send(err);
  }
}),

// Update votes for posts or comments
router.patch('/vote/:id', verify, async (req, res) => {
  const id = req.params.id;
  // Post's id validation
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No post with id: ${id}`);
  }
  // Update thread's votes
  try {
    const thread = await Thread.findById(id);
    const updatedThread = await Thread.findByIdAndUpdate(id, {votes: thread.votes + 1}, {new: true})
    res.status(200).send({
      id: thread._id,
      msg: 'Updated votes successfully'
    });
  } catch (err) {
    res.status(400).send(err);
  }
}),

// Delete posts or comments
router.delete('/:id', verify, async (req, res) => {
  const id = req.params.id;
  // Post's id validation
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No post with id: ${id}`);
  }
  try {
    const deletedThread = await Thread.findByIdAndRemove(id);
    res.status(200).send({
      msg: 'Deleted successfully'
    });
  } catch (err) {
    res.status(400).send(err);
  }
})


module.exports = router;