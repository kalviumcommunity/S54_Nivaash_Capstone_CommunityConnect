const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  OrganisationName: {
    type: String,
    required: true
  },
  Location: {
    type: String,
    required: true,
    unique: false
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
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = { Post };
