const mongoose = require('mongoose');

const productSliderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  des: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  productID: {
    type: String,
    required: true
  }
});

const ProductSlider = mongoose.model('ProductSlider', productSliderSchema);

module.exports = ProductSlider;