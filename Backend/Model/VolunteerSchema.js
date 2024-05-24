const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const education = new Schema({
  EducationalInstitute: {
    type: String,
  },
  Course: {
    type: String,
  },
  Courselocation: {
    type: String,
  },
});

const experience = new Schema({
  organization: {
    type: String,
  },
  duration: {
    type: String,
  },
  Experiencelocation: {
    type: String,
  },
});

const volunteerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  Password: {
    type: String,
    required: true,
  },
  participations: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  education: {
    type: [education],
  },
  experience: {
    type: [experience],
  },
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;
