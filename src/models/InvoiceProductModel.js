const mongoose = require('mongoose');

const invoiceProductSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true
  },
  productID: {
    type: String,
    required: true
  },
  invoiceID: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  }
});

const InvoiceProduct = mongoose.model('InvoiceProduct', invoiceProductSchema);

module.exports = InvoiceProduct;