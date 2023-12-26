const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  shortDes: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  discountPrice: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  star: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  remark: {
    type: String
  },
  categoryID: {
    type: String,
    required: true
  },
  brandID: {
    type: String,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;