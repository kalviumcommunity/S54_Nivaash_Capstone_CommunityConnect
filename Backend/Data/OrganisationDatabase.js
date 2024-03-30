
const { Organization } = require("./OrganisationSchema.js");
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
        organizationName: "Community Outreach Foundation",
        emailAddress: "info@communityoutreach.org",
        address: "123 Main St, City, Country",
        establishmentYear: 2005,
        successfulEvents: [
            {
                eventName: "Annual Charity Gala",
                eventDate: new Date("2023-10-15"),
                eventPlace: "City Convention Center"
            },
            {
                eventName: "Holiday Food Drive",
                eventDate: new Date("2023-12-20"),
                eventPlace: "Local Community Center"
            }
        ],
        awards: [
            {
                awardName: "Outstanding Community Service Award",
                awardDate: new Date("2022-12-31"),
                awardDescription: "Awarded for exceptional contributions to the community."
            }
        ]
    },
    {
        organizationName: "Youth Empowerment Initiative",
        emailAddress: "info@youthempowerment.org",
        address: "456 Elm St, City, Country",
        establishmentYear: 2010,
        successfulEvents: [
            {
                eventName: "Career Development Workshop",
                eventDate: new Date("2023-07-10"),
                eventPlace: "City Library"
            }
        ],
        awards: [
            {
                awardName: "Excellence in Youth Development",
                awardDate: new Date("2022-11-15"),
                awardDescription: "Recognized for outstanding efforts in empowering youth."
            }
        ]
    }
];

Organization.insertMany(dummyOrganizations)
    .then(() => console.log('Organizations added successfully!'))
    .catch(err => console.error('Error adding organizations:', err));

module.exports = { mongoose };
