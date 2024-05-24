const { Organization } = require('../Model/OrganisationSchema');

const getOneOrganisation = async (req, res) => {
  try {
    const { id } = req.params;
    const organisation = await Organization.findById(id);
    if (!organisation) {
      return res.status(404).json({ message: 'Organisation not found' });
    }
    res.status(200).json(organisation);
  } catch (error) {
    console.error("Error fetching organisation:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createOrganisation = async (req, res) => {
  try {
    const organisation = new Organization(req.body);
    await organisation.save();
    res.status(201).json(organisation);
  } catch (error) {
    console.error("Error creating organisation:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getOrganizationByEmail = async (req, res) => {
  try {
    console.log("Fetching organization by email:", req.params.email);
    const email = req.params.email;
    const organization = await Organization.findOne({ email });
    if (!organization) {
      console.log("Organization not found");
      return res.status(404).json({ message: 'Organization not found' });
    }
    res.status(200).json(organization);
  } catch (error) {
    console.error("Error fetching organization by email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



const addEvent = async (req, res) => {
  try {
    const email = req.params.email;
    const { eventName, eventPlace } = req.body;
    const organisation = await Organization.findOneAndUpdate(
      { email },
      { $push: { successfulEvents: { eventName, eventPlace } } },
      { new: true }
    );
    if (!organisation) {
      return res.status(404).send('Organization not found');
    }
    res.status(200).json(organisation);
  } catch (error) {
    console.error("Error adding event:", error);
    res.status(500).send("Internal server error");
  }
};

const addAward = async (req, res) => {
  try {
    const email = req.params.email;
    const { awardName, awardDescription } = req.body;
    const organisation = await Organization.findOneAndUpdate(
      { email },
      { $push: { awards: { awardName, awardDescription } } },
      { new: true }
    );
    if (!organisation) {
      return res.status(404).send('Organization not found');
    }
    res.status(200).json(organisation);
  } catch (error) {
    console.error("Error adding award:", error);
    res.status(500).send("Internal server error");
  }
};

const getAllOrganisations = async (req, res) => {
  try {
    const organisations = await Organization.find();
    res.status(200).json(organisations);
  } catch (error) {
    console.error("Error fetching all organisations:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateOrganisation = async (req, res) => {
  try {
    const { id } = req.params;
    const organisation = await Organization.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });
    if (!organisation) {
      return res.status(404).json({ message: 'Organisation not found' });
    }
    res.status(200).json(organisation);
  } catch (error) {
    console.error("Error updating organisation:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteOrganisation = async (req, res) => {
  try {
    const { id } = req.params;
    const organisation = await Organization.findByIdAndDelete(id);
    if (!organisation) {
      return res.status(404).json({ message: 'Organisation not found' });
    }
    res.status(200).json({ message: 'Organisation deleted successfully' });
  } catch (error) {
    console.error("Error deleting organisation:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getOneOrganisation,
  createOrganisation,
  getAllOrganisations,
  getOrganizationByEmail,
  addEvent,
  addAward,
  updateOrganisation,
  deleteOrganisation
};
