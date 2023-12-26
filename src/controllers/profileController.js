const profileService = require('../services/profileService');

const profileController = {
  createProfile: async (req, res) => {
    try {
      const newProfile = await profileService.createProfile(req.body);
      res.status(201).json(newProfile);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateProfile: async (req, res) => {
    try {
      const updatedProfile = await profileService.updateProfile(req.params.profileId, req.body);
      res.json(updatedProfile);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteProfile: async (req, res) => {
    try {
      await profileService.deleteProfile(req.params.profileId);
      res.json({ message: 'Profile deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getProfileById: async (req, res) => {
    try {
      const profile = await profileService.getProfileById(req.params.profileId);
      res.json(profile);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getAllProfiles: async (req, res) => {
    try {
      const profiles = await profileService.getAllProfiles();
      res.json(profiles);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = profileController;