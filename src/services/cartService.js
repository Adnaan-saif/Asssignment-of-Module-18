const Cart = require('../models/CartModel');

const cartService = {
  createCartItem: async (cartItemData) => {
    const newCartItem = new Cart(cartItemData);
    await newCartItem.save();
    return newCartItem;
  },

  updateCartItem: async (cartItemId, cartItemData) => {
    const updatedCartItem = await Cart.findByIdAndUpdate(cartItemId, cartItemData, { new: true });
    return updatedCartItem;
  },

  deleteCartItem: async (cartItemId) => {
    await Cart.findByIdAndDelete(cartItemId);
  },

  getCartItemById: async (cartItemId) => {
    const cartItem = await Cart.findById(cartItemId);
    return cartItem;
  },

  getAllCartItems: async () => {
    const cartItems = await Cart.find();
    return cartItems;
  },
};

module.exports = cartService;