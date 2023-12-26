const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: true,
    trim: true
  },
  brandImg: {
    type: String,
    required: true
  }
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;