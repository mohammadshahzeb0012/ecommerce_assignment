const express = require('express');
const { addProduct, getAllProducts, updateProduct, deleteProduct } = require('../controllers/productController');
const isAuthanticated = require('../middlewares/isAuthanticated');
const Router = express.Router()

Router.post("/add", isAuthanticated, addProduct)
Router.post("/getall", getAllProducts)
Router.post("/update/:id", isAuthanticated, updateProduct)
Router.post("/delete/:id", isAuthanticated, deleteProduct)

module.exports = Router