const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get All Pots
router.get('/', async(req, res) => {

    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ ErrorMessage: err });
    }

});

// Get Post By Id
router.get('/:postId', async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ ErrorMessage: err });
    }
});

//sUMBIT a POST
router.post('/', async(req, res) => {

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        resjson(savedPost);
    } catch (err) {
        res.json({ ErrorMessage: err });
    }

});

// Delete Post
router.delete('/:postId', async(req, res) => {
    try {
        const deletedPost = await Post.remove({ _id: req.params.postId });
        res.json(deletedPost);
    } catch (err) {
        res.json({ ErrorMessage: err });
    }
});

// update a Post
router.patch('/:postId', async(req, res) => {
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } });
        res.json(updatedPost);
    } catch (err) {
        res.json({ ErrorMessage: err });
    }
});

module.exports = router;