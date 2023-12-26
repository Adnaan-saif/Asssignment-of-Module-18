const User = require('../models/UserModel');

const userService = {
  createUser: async (email, otp) => {
    const newUser = new User({
      email,
      otp,
    });
    await newUser.save();
    return newUser;
  },

  findUserByEmail: async (email) => {
    return User.findOne({ email });
  },

  updateOtp: async (email, newOtp) => {
    return User.updateOne({ email }, { otp: newOtp });
  },

  createProfile: async (userId, profileData) => {
    const user = await User.findById(userId);
    user.profile = profileData;
    await user.save();
    return user.profile;
  },

  updateProfile: async (userId, profileData) => {
    const user = await User.findById(userId);
    user.profile = { ...user.profile, ...profileData };
    await user.save();
    return user.profile;
  },

  readProfile: async (userId) => {
    const user = await User.findById(userId);
    return user.profile;
  },

  saveWishList: async (userId, wishlistItem) => {
    const user = await User.findById(userId);
    user.wishlist.push(wishlistItem);
    await user.save();
    return user.wishlist;
  },

  removeWishList: async (userId, productId) => {
    const user = await User.findById(userId);
    user.wishlist = user.wishlist.filter((item) => item.productId !== productId);
    await user.save();
    return user.wishlist;
  },

  getWishList: async (userId) => {
    const user = await User.findById(userId);
    return user.wishlist;
  },

  saveCartList: async (userId, cartItem) => {
    const user = await User.findById(userId);
    user.cart.push(cartItem);
    await user.save();
    return user.cart;
  },

  removeCartList: async (userId, productId) => {
    const user = await User.findById(userId);
    user.cart = user.cart.filter((item) => item.productId !== productId);
    await user.save();
    return user.cart;
  },

  getCartList: async (userId) => {
    const user = await User.findById(userId);
    return user.cart;
  },
};

module.exports = userService;