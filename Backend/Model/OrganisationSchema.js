const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CounterSchema = new Schema({
    _id: { type: String, required: true },
    sequence_value: { type: Number, default: 1 }
});

const Counter = mongoose.model('Counter', CounterSchema);

const organizationSchema = new Schema({
    organizationId: { 
        type: Number,
        unique: true
    },
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

organizationSchema.pre('save', async function (next) {
    const organization = this;
    if (!organization.isNew) {
        return next();
    }
    try {
        const counter = await Counter.findByIdAndUpdate(
            { _id: 'organizationId' }, 
            { $inc: { sequence_value: 1 } },
            { new: true, upsert: true }
        );
        organization.organizationId = counter.sequence_value;
        next();
    } catch (error) {
        return next(error);
    }
});

const Organization = mongoose.model('Organization', organizationSchema);

module.exports = { Organization };
