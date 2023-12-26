const cartService = require('../services/cartService');

const cartController = {
  createCart: async (req, res) => {
    try {
      const newCartItem = await cartService.createCartItem(req.body);
      res.status(201).json(newCartItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateCart: async (req, res) => {
    try {
      const updatedCartItem = await cartService.updateCartItem(req.params.cartItemId, req.body);
      res.json(updatedCartItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteCart: async (req, res) => {
    try {
      await cartService.deleteCartItem(req.params.cartItemId);
      res.json({ message: 'Cart item deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getCartById: async (req, res) => {
    try {
      const cartItem = await cartService.getCartItemById(req.params.cartItemId);
      res.json(cartItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getAllCartItems: async (req, res) => {
    try {
      const cartItems = await cartService.getAllCartItems();
      res.json(cartItems);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = cartController;