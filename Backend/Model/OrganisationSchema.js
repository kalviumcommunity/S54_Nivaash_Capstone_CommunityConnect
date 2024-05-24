const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const organizationSchema = new Schema({
    organizationName: {
        type: String,
        required: true
    },
    contactNo:{
        type: String,
        required:true
    },
    email: {
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
    Password: {
        type: String,
        required: true
    },
    posts: {
        type: Number,
        default: 0
    },
    followers: { 
        type: Number,
        default: 0
    },
    successfulEvents: [{
        eventName: {
            type: String,
        },
        eventPlace: {
            type: String,
        }
    }],
    awards: [{
        awardName: {
            type: String,
        },
        awardDescription: {
            type: String,
        }
    }],
});


const Organization = mongoose.model('Organization', organizationSchema);

module.exports = { Organization };
