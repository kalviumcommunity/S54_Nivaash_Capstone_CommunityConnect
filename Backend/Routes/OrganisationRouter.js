

const express = require('express');
const router = express.Router();
const organisationController = require('../Controllers/OrganisationController');

// Create an organisation
router.post('/createorganisation', organisationController.createOrganisation);

// Get organisation by ID
router.get('/:id', organisationController.getOneOrganisation);

// Get all organisations
router.get('/', organisationController.getAllOrganisations);

// Update organisation by ID
router.put('/:id', organisationController.updateOrganisation);

// Delete organisation by ID
router.delete('/:id', organisationController.deleteOrganisation);

module.exports = router;
