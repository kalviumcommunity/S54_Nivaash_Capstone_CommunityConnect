const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const organizationSchema = new Schema({
    organizationName: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    establishmentYear: {
        type: Number,
        required: true
    },
    successfulEvents: [{
        eventName: {
            type: String,
            required: true
        },
        eventDate: {
            type: Date,
            required: true
        },
        eventPlace: {
            type: String,
            required: true
        }
    }],
    awards: [{
        awardName: {
            type: String,
            required: true
        },
        awardDate: {
            type: Date,
            required: true
        },
        awardDescription: {
            type: String,
            required: true
        }
    }],
    posts: {
        type: Number,
        default: 0
    },
    followers: { 
        type: Number,
        default: 0
    }
});

const Organization = mongoose.model('Organization', organizationSchema);

module.exports = { Organization };
