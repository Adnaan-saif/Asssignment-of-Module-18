const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/UserOTP/:email', userController.sendOTP);
router.get('/VerifyLogin/:email/:otp', userController.verifyLogin);
router.get('/UserLogout', userController.logout);

router.post('/CreateProfile', userController.createProfile);
router.post('/UpdateProfile', userController.updateProfile);
router.get('/ReadProfile', userController.readProfile);

router.post('/SaveWishList', userController.saveWishList);
router.post('/RemoveWishList', userController.removeWishList);
router.get('/WishList', userController.getWishList);

router.post('/SaveCartList', userController.saveCartList);
router.post('/RemoveCartList', userController.removeCartList);
router.get('/CartList', userController.getCartList);

module.exports = router;