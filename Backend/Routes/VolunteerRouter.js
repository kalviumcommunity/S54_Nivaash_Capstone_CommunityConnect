//VolunteerRouter.js

const express = require('express');
const router = express.Router();
const volunteerController = require('../Controllers/VolunteerController.js');

// Create a volunteer
router.post('/createvolunteer', volunteerController.createVolunteer);

// Get volunteer by ID
router.get('/id/:id', volunteerController.getOneVolunteer);

// Get volunteer by email
router.get('/email/:email', volunteerController.getVolunteerByEmail);

// Get all volunteers
router.get('/', volunteerController.getAllVolunteers);

router.put('/email/:email/education', volunteerController.addEducation);

router.put('/email/:email/experience', volunteerController.addExperience);

// Update volunteer by ID
router.put('/:id', volunteerController.updateVolunteer);

// Delete volunteer by ID
router.delete('/:id', volunteerController.deleteVolunteer);

module.exports = router;
