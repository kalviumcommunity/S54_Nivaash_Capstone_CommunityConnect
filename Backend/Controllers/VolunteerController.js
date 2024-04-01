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
    createVolunteer,
    getAllVolunteers,
    updateVolunteer,
    deleteVolunteer
  };
