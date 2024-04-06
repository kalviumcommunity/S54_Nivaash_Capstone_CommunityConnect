const { Organization } = require('../Model/OrganisationSchema');


const getOneOrganisation = async (req, res) => {
    try {
        const id = req.params.id;
    const organisation = await Organization.findById(id);
    if (!organisation) {
      return res.status(404).send('Organisation not found');
    }
    res.status(200).json(organisation);
  } catch (error) {
    console.error("Error fetching organisation:", error);
    res.status(500).send("Internal server error");
  }
};

const createOrganisation = async (req, res) => {
  try {
    const organisation = new Organization(req.body);
    await organisation.save();
    res.status(201).send(organisation);
  } catch (error) {
    console.error("Error creating organisation:", error);
    res.status(500).send("Internal server error");
  }
};

const getAllOrganisations = async (req, res) => {
  try {
    const organisations = await Organization.find();
    res.status(200).json(organisations);
  } catch (error) {
    console.error("Error fetching all organisations:", error);
    res.status(500).send("Internal server error");
  }
};

const updateOrganisation = async (req, res) => {
  try {
    const id = req.params.id;
    const organisation = await Organization.findByIdAndUpdate(id, req.body, {
      new: true
    });
    if (!organisation) {
      return res.status(404).send('Organisation not found');
    }
    res.status(200).json(organisation);
  } catch (error) {
    console.error("Error updating organisation:", error);
    res.status(500).send("Internal server error");
  }
};

const deleteOrganisation = async (req, res) => {
  try {
    const id = req.params.id;
    const organisation = await Organization.findByIdAndDelete(id);
    if (!organisation) {
      return res.status(404).send('Organisation not found');
    }
    res.status(200).json(organisation);
  } catch (error) {
    console.error("Error deleting organisation:", error);
    res.status(500).send("Internal server error");
  }
};

module.exports = {
  getOneOrganisation,
  createOrganisation,
  getAllOrganisations,
  updateOrganisation,
  deleteOrganisation
};
