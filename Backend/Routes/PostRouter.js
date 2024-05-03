//PostRouter.js

const express = require('express');
const router = express.Router();
const postController = require('../Controllers/PostController.js');

router.post('/create', postController.createPost);

router.get('/:id', postController.getOnePost);

router.get('/', postController.getAllPosts);

router.put('/:id', postController.updatePost);

router.put('/:postId/comment', postController.addComment)

router.delete('/:id', postController.deletePost);

module.exports = router;
