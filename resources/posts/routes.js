const express = require('express');
const router = express.Router();
const postController = require('./controller');
const auth = require('../user/middleware');
const checkPost = require('./middleware');
// Routes
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', auth.checkAuth, postController.createPost);
router.put('/:id', auth.checkAuth,checkPost.checkPost, postController.updatePost);
router.delete('/:id', auth.checkAuth,checkPost.checkPost, postController.deletePost);

module.exports = router;
