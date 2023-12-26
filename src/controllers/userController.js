const userService = require('../services/userService');

const userController = {
  sendOTP: async (req, res) => {
    try {
      const { email } = req.params;
      const otp = generateOTP();
      await userService.createUser(email, otp);
      res.json({ message: 'OTP sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  verifyLogin: async (req, res) => {
    try {
      const { email, otp } = req.params;
      const user = await userService.findUserByEmail(email);

      if (user && user.otp === otp) {
        res.json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid OTP' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  logout: (req, res) => {
    try {
      res.json({ message: 'Logged out successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProfile: async (req, res) => {
    try {
      const userId = req.user.id;
      const profileData = req.body;
      const profile = await userService.createProfile(userId, profileData);
      res.json(profile);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateProfile: async (req, res) => {
    try {
      const userId = req.user.id;
      const profileData = req.body;
      const updatedProfile = await userService.updateProfile(userId, profileData);
      res.json(updatedProfile);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  readProfile: async (req, res) => {
    try {
      const userId = req.user.id;
      const profile = await userService.readProfile(userId);
      res.json(profile);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  saveWishList: async (req, res) => {
    try {
      const userId = req.user.id;
      const wishlistItem = req.body;
      const wishlist = await userService.saveWishList(userId, wishlistItem);
      res.json(wishlist);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  removeWishList: async (req, res) => {
    try {
      const userId = req.user.id;
      const productId = req.body.productId;
      const wishlist = await userService.removeWishList(userId, productId);
      res.json(wishlist);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getWishList: async (req, res) => {
    try {
      const userId = req.user.id;
      const wishlist = await userService.getWishList(userId);
      res.json(wishlist);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  saveCartList: async (req, res) => {
    try {
      const userId = req.user.id;
      const cartItem = req.body;
      const cart = await userService.saveCartList(userId, cartItem);
      res.json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  removeCartList: async (req, res) => {
    try {
      const userId = req.user.id;
      const productId = req.body.productId;
      const cart = await userService.removeCartList(userId, productId);
      res.json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getCartList: async (req, res) => {
    try {
      const userId = req.user.id;
      const cart = await userService.getCartList(userId);
      res.json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = userController;