const express = require("express")
const { placeOrder, getAllOrders, cancelOrder } = require("../controllers/orderController")
const Router = express.Router()

Router.post("/place", placeOrder)
Router.get("/getall", getAllOrders)
Router.post("/cancel/:orderId", cancelOrder)

module.exports = Router