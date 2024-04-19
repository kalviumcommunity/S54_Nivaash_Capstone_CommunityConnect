    const express = require('express');
    const router = express.Router();
    const volunteerController = require('../Controllers/VolunteerController');

    // Create a volunteer
    router.post('/createvolunteer', volunteerController.createVolunteer);

    // Get volunteer by ID
    router.get('/:id', volunteerController.getOneVolunteer);

    // Get all volunteers
    router.get('/', volunteerController.getAllVolunteers);

    // Update volunteer by ID
    router.put('/:id', volunteerController.updateVolunteer);

    // Delete volunteer by ID
    router.delete('/:id', volunteerController.deleteVolunteer);

    module.exports = router;