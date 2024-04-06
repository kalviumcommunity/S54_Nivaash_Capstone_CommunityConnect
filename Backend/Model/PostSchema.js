const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    OrganisationName: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true,
        unique: true
    },
    EventImage: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    comments: [
        {
            user: String,
            comment: String
        }
    ]
});

const Post = mongoose.model('Post', PostSchema);

module.exports = { Post };
