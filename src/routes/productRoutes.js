const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/ProductBrandList', productController.getProductBrandList);
router.get('/ProductCategoryList', productController.getProductCategoryList);
router.get('/ProductSliderList', productController.getProductSliderList);
router.get('/ProductListByBrand/:BrandID', productController.getProductBrandList);
router.get('/ProductListByCategory/:CategoryID', productController.getProductCategoryList);
router.get('/ProductListBySmilier/:CategoryID', productController.getProductListBySimilar);
router.get('/ProductListByKeyword/:Keyword', productController.getProductListByKeyword);
router.get('/ProductListByRemark/:Remark', productController.getProductListByRemark);
router.get('/ProductDetails/:ProductID', productController.getProductDetails);
router.get('/ProductReviewList/:ProductID', productController.getProductReviewList);

module.exports = router;
