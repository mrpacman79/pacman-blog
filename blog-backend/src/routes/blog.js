const express = require('express');
const {body} = require('express-validator');
const router = express.Router();
const blogController = require('../controllers/blog');

// POST : /v1/blog/post
router.post('/post', [
        body('title').isLength({min: 5}).withMessage("INPUT Title tidak sesuai"),
        body('body').isLength({min: 5}).withMessage("INPUT Body tidak sesuai")
], blogController.createBlogPost);
// GET : /v1/blog/posts
router.get('/posts', blogController.getAllBlogPost);
// GET : /v1/blog/post:postId
router.get('/post/:postId', blogController.getBlogPostById);
// PUT : /v1/blog/post:postId
router.put('/post/:postId', [
        body('title').isLength({min: 5}).withMessage("INPUT Title tidak sesuai"),
        body('body').isLength({min: 5}).withMessage("INPUT Body tidak sesuai")
], blogController.updateBlogPost);
// DELETE : /v1/blog/post:postId
router.delete('/post/:postId', blogController.deleteBlogPost);

module.exports = router;