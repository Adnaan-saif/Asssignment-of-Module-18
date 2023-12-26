const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  productID: {
    type: String,
    required: true
  },
  userID: {
    type: String,
    required: true
  },
  des: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;