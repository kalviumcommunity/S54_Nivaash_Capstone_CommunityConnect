const express = require('express');
const router = express.Router();
const { Volunteer } = require('../Model/VolunteerSchema.js');

// Create a volunteer
router.post('/createvolunteer', async (req, res) => {
    try {
        const volunteer = new Volunteer(req.body);
        await volunteer.save();
        res.status(201).send(volunteer);
    } catch (error) {
        console.error('Error creating volunteer:', error);
        res.status(500).send(error.message);
    }
});

// Get volunteer by ID
router.get('/:id', async (req, res) => {
    try {
        const volunteer = await Volunteer.findById(req.params.id);
        if (!volunteer) {
            return res.status(404).send('Volunteer not found');
        }
        res.send(volunteer);
    } catch (error) {
        console.error('Error fetching volunteer by ID:', error);
        res.status(500).send(error.message);
    }
});

// Get all volunteers
router.get('/', async (req, res) => {
    try {
        const volunteers = await Volunteer.find();
        res.send(volunteers);
    } catch (error) {
        console.error('Error fetching all volunteers:', error);
        res.status(500).send(error.message);
    }
});

// Update volunteer by ID
router.put('/:id', async (req, res) => {
    try {
        const volunteer = await Volunteer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!volunteer) {
            return res.status(404).send('Volunteer not found');
        }
        res.send(volunteer);
    } catch (error) {
        console.error('Error updating volunteer:', error);
        res.status(500).send(error.message);
    }
});

// Delete volunteer by ID
router.delete('/:id', async (req, res) => {
    try {
        const volunteer = await Volunteer.findByIdAndDelete(req.params.id);
        if (!volunteer) {
            return res.status(404).send('Volunteer not found');
        }
        res.send(volunteer);
    } catch (error) {
        console.error('Error deleting volunteer:', error);
        res.status(500).send(error.message);
    }
});

module.exports = router;
