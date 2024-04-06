const express = require('express');
const router = express.Router();
const postController = require('../Controllers/PostController');

router.post('/createpost', postController.createPost);

router.get('/:id', postController.getOnePost);

router.get('/', postController.getAllPosts);

router.put('/:id', postController.updatePost);

router.delete('/:id', postController.deletePost);

module.exports = router; 
