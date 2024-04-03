
const { Organization } = require("../Model/OrganisationSchema.js");
const mongoose = require("mongoose");
require("dotenv").config({ path: '../.env' });

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

    const dummyOrganizations = [
        {
            "organizationName": "Community Foundation",
            "emailAddress": "info@communityfoundation.org",
            "address": "123 Main Street, Anytown, USA",
            "establishmentYear": 1995,
            "successfulEvents": [
                {
                "eventName": "Annual Gala",
                "eventDate": "2024-05-15",
                "eventPlace": "Grand Ballroom"
                },
                {
                "eventName": "Community Cleanup",
                "eventDate": "2024-07-20",
                "eventPlace": "Local Park"
                }
            ],
            "awards": [
                {
                "awardName": "Outstanding Community Service Award",
                "awardDate": "2023-12-31",
                "awardDescription": "Recognition for exemplary community service"
                }
            ],
            "posts": 20,
            "followers": 500
        }
    ];
    
module.exports = dummyOrganizations;


Organization.insertMany(dummyOrganizations)
    .then(() => console.log('Organizations added successfully!'))
    .catch(err => console.error('Error adding organizations:', err));

module.exports = { mongoose };