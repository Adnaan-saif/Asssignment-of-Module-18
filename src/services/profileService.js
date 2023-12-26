const Profile = require('../models/ProfileModel');

const profileService = {
  createProfile: async (profileData) => {
    const newProfile = new Profile(profileData);
    await newProfile.save();
    return newProfile;
  },

  updateProfile: async (profileId, profileData) => {
    const updatedProfile = await Profile.findByIdAndUpdate(profileId, profileData, { new: true });
    return updatedProfile;
  },

  deleteProfile: async (profileId) => {
    await Profile.findByIdAndDelete(profileId);
  },

  getProfileById: async (profileId) => {
    const profile = await Profile.findById(profileId);
    return profile;
  },

  getAllProfiles: async () => {
    const profiles = await Profile.find();
    return profiles;
  },
};

module.exports = profileService;