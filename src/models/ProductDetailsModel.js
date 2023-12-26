const mongoose = require('mongoose');

const productDetailSchema = new mongoose.Schema({
  img1: {
    type: String,
    required: true
  },
  img2: {
    type: String,
    required: true
  },
  img3: {
    type: String,
    required: true
  },
  img4: {
    type: String,
    required: true
  },
  des: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  productID: {
    type: String,
    required: true
  }
});

const ProductDetail = mongoose.model('ProductDetail', productDetailSchema);

module.exports = ProductDetail;