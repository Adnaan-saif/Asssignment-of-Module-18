const mongoose = require('mongoose');

const wishSchema = new mongoose.Schema({
  productID: {
    type: String,
    required: true
  },
  userID: {
    type: String,
    required: true
  }
});

const Wish = mongoose.model('Wish', wishSchema);

module.exports = Wish;