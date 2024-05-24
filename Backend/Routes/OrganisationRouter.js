const express = require("express");
const router = express.Router();
const organisationController = require("../Controllers/OrganisationController.js");

// Create an organisation
router.post("/create", organisationController.createOrganisation);

// Get organisation by ID
router.get("/:id", organisationController.getOneOrganisation);

// Get all organisations
router.get("/", organisationController.getAllOrganisations);

// Get organisation by email
router.get("/email/:email", organisationController.getOrganizationByEmail); // Ensure this line is correct

// Update organisation by ID
router.put("/:id", organisationController.updateOrganisation);

// Delete organisation by ID
router.delete("/:id", organisationController.deleteOrganisation);

// Add event by organization email
router.put("/email/:email/events", organisationController.addEvent);

// Add award by organization email
router.put("/email/:email/awards", organisationController.addAward);

module.exports = router;
