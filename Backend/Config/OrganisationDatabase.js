
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
            organizationName: "Charity Foundation",
            emailAddress: "foundation@example.com",
            address: "123 Charity Street, Cityville",
            establishmentYear: 2005,
            successfulEvents: [
                {
                    eventName: "Annual Fundraiser Gala",
                    eventDate: new Date("2023-08-15"),
                    eventPlace: "City Convention Center"
                },
                {
                    eventName: "Community Health Fair",
                    eventDate: new Date("2023-05-20"),
                    eventPlace: "City Park"
                }
            ],
            awards: [
                {
                    awardName: "Community Service Award",
                    awardDate: new Date("2022-12-01"),
                    awardDescription: "Recognized for outstanding contributions to the community"
                }
            ],
            posts: 10,
            followers: 5000
        },
        {
            organizationName: "Environmental Conservation Society",
            emailAddress: "conservation@example.com",
            address: "456 Green Street, Townsville",
            establishmentYear: 2010,
            successfulEvents: [
                {
                    eventName: "Tree Planting Day",
                    eventDate: new Date("2023-04-22"),
                    eventPlace: "Townsville Park"
                },
                {
                    eventName: "Beach Cleanup Campaign",
                    eventDate: new Date("2023-07-10"),
                    eventPlace: "Townsville Beach"
                }
            ],
            awards: [
                {
                    awardName: "Environmental Excellence Award",
                    awardDate: new Date("2022-11-15"),
                    awardDescription: "Recognized for outstanding efforts in environmental conservation"
                },
                {
                    awardName: "Community Engagement Award",
                    awardDate: new Date("2023-02-28"),
                    awardDescription: "Recognized for engaging the community in environmental initiatives"
                }
            ],
            posts: 20,
            followers: 8000
        }
    ];
    
module.exports = dummyOrganizations;


Organization.insertMany(dummyOrganizations)
    .then(() => console.log('Organizations added successfully!'))
    .catch(err => console.error('Error adding organizations:', err));

module.exports = { mongoose };
