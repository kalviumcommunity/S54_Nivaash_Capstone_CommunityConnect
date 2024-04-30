//postController.js
const { Post } = require('../Model/PostSchema');

const getOnePost = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).send('Post not found');
        }
        res.status(200).json(post);
    } catch (error) {
        console.error("Error fetching post:", error);
        res.status(500).send("Internal server error");
    }
};

const createPost = async (req, res) => {
    try {
        const { OrganisationName, Location, EventImage, Description, startDate, endDate } = req.body;
        const post = new Post({ OrganisationName, Location, EventImage, Description, startDate, endDate });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).send("Internal server error");
    }
};

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        console.error("Error fetching all posts:", error);
        res.status(500).send("Internal server error");
    }
};

const updatePost = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Post.findByIdAndUpdate(id, req.body, {
            new: true
        });
        if (!post) {
            return res.status(404).send('Post not found');
        }
        res.status(200).json(post);
    } catch (error) {
        console.error("Error updating post:", error);
        res.status(500).send("Internal server error");
    }
};

const deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Post.findByIdAndDelete(id);
        if (!post) {
            return res.status(404).send('Post not found');
        }
        res.status(200).json(post);
    } catch (error) {
        console.error("Error deleting post:", error);
        res.status(500).send("Internal server error");
    }
};

module.exports = {
    getOnePost,
    createPost,
    getAllPosts,
    updatePost,
    deletePost
};
