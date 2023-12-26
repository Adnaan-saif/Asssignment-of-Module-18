const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  productID: {
    type: String,
    required: true
  },
  userID: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;