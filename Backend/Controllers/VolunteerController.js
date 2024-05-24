// volunteerController.js

const Volunteer = require("../Model/VolunteerSchema.js");


  const getOneVolunteer = async (req, res) => {
    try {
      const id = req.params.id;
      const volunteer = await Volunteer.findById(id);
      if (!volunteer) {
        return res.status(404).send('Volunteer not found');
      }
      res.status(200).json(volunteer);
    } catch (error) {
      console.error("Error fetching volunteer:", error);
      res.status(500).send("Internal server error");
    }
  };

  const getVolunteerByEmail = async (req, res) => {
    try {
        const email = req.params.email;
        const volunteer = await Volunteer.findOne({ email });
        if (!volunteer) {
            return res.status(404).send('Volunteer not found');
        }
        res.status(200).json(volunteer);
    } catch (error) {
        console.error("Error fetching volunteer:", error);
        res.status(500).send("Internal server error");
    }
};


  const createVolunteer = async (req, res) => {
    try {
      const volunteer = new Volunteer(req.body);
      await volunteer.save();
      res.status(201).send(volunteer);
    } catch (error) {
      console.error("Error creating volunteer:", error);
      res.status(500).send("Internal server error");
    }
  };

  const getAllVolunteers = async (req, res) => {
    try {
      const volunteers = await Volunteer.find();
      res.status(200).json(volunteers);
    } catch (error) {
      console.error("Error fetching all volunteers:", error);
      res.status(500).send("Internal server error");
    }
  };

  const addEducation = async (req, res) => {
    try {
        const email = req.params.email;
        const education = req.body;
        const volunteer = await Volunteer.findOneAndUpdate(
            { email },
            { $push: { education } },
            { new: true }
        );
        if (!volunteer) {
            return res.status(404).send('Volunteer not found');
        }
        res.status(200).json(volunteer);
    } catch (error) {
        console.error("Error adding education:", error);
        res.status(500).send("Internal server error");
    }
};

// ExperienceController.js

const addExperience = async (req, res) => {
  try {
    const email  = req.params.email;
    const experience = req.body;
    const volunteer = await Volunteer.findOneAndUpdate(
      { email },
      { $push: { experience } },
      { new: true }
    );
    if (!volunteer) {
      return res.status(404).send('Volunteer not found');
    }
    res.status(200).json(volunteer);
  } catch (error) {
    console.error("Error adding experience:", error);
    res.status(500).send("Internal server error");
  }
};



  const updateVolunteer = async (req, res) => {
    try {
      const id = req.params.id;
      const volunteer = await Volunteer.findByIdAndUpdate(id, req.body, {
        new: true
      });
      if (!volunteer) {
        return res.status(404).send('Volunteer not found');
      }
      res.status(200).json(volunteer);
    } catch (error) {
      console.error("Error updating volunteer:", error);
      res.status(500).send("Internal server error");
    }
  };

  const deleteVolunteer = async (req, res) => {
    try {
      const id = req.params.id;
      const volunteer = await Volunteer.findByIdAndDelete(id);
      if (!volunteer) {
        return res.status(404).send('Volunteer not found');
      }
      res.status(200).json(volunteer);
    } catch (error) {
      console.error("Error deleting volunteer:", error);
      res.status(500).send("Internal server error");
    }
  };

  module.exports = {
    getOneVolunteer,
    getVolunteerByEmail,
    createVolunteer,
    getAllVolunteers,
    addEducation,
    addExperience,
    updateVolunteer,
    deleteVolunteer
  };
