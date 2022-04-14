const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

// Creating Product
router.post('/product', productsController.createProduct);

// Getting Products
router.get('/products', productsController.getAllProducts);

module.exports = router;