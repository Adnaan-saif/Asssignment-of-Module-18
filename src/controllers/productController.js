const productService = require('../services/productService');

const productController = {
  getProductBrandList: async (req, res) => {
    try {
      const brands = await productService.getProductBrandList();
      res.json({ brands });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getProductCategoryList: async (req, res) => {
    try {
      const categories = await productService.getProductCategoryList();
      res.json({ categories });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getProductSliderList: async (req, res) => {
    try {
      const sliderProducts = await productService.getProductSliderList();
      res.json(sliderProducts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getProductListByBrand: async (req, res) => {
    try {
      const { BrandID } = req.params;
      const productList = await productService.getProductListByBrand(BrandID);
      res.json(productList);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getProductListByCategory: async (req, res) => {
    try {
      const { CategoryID } = req.params;
      const productList = await productService.getProductListByCategory(CategoryID);
      res.json(productList);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getProductListBySimilar: async (req, res) => {
    try {
      const { CategoryID } = req.params;
      const productList = await productService.getProductListBySimilar(CategoryID);
      res.json(productList);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getProductListByKeyword: async (req, res) => {
    try {
      const { Keyword } = req.params;
      const productList = await productService.getProductListByKeyword(Keyword);
      res.json(productList);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getProductListByRemark: async (req, res) => {
    try {
      const { Remark } = req.params;
      const productList = await productService.getProductListByRemark(Remark);
      res.json(productList);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getProductDetails: async (req, res) => {
    try {
      const { ProductID } = req.params;
      const productDetails = await productService.getProductDetails(ProductID);
      res.json(productDetails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getProductReviewList: async (req, res) => {
    try {
      const { ProductID } = req.params;
      const reviewList = await productService.getProductReviewList(ProductID);
      res.json(reviewList);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = productController;