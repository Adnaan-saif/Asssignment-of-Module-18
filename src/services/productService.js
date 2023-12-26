const Product = require('../models/ProductModel');

const productService = {
  getProductBrandList: async () => {
    try {
      const brands = await Product.distinct('brand');
      return brands;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching product brands');
    }
  },

  getProductCategoryList: async () => {
    try {
      const categories = await Product.distinct('category');
      return categories;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching product categories');
    }
  },

};

module.exports = productService;