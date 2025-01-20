const Order = require("./../models/Order");

const placeOrder = async (req, res) => {
    const { products, total } = req.body;
    const userID = req.user._id;
    try {
        await Order.create({
            user: userID,
            products: products,
            total: total,
        });

        req.io.to(userID).emit("orderPlaced", {
            success: true,
            message: "Your order has been placed",
        });

        return res.status(201).json({
            success: true,
            message: "Order placed"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id }).populate('products');
        return res.status(200).json({
            success: true,
            message: "fetch success",
            data: orders
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const cancelOrder = async (req, res) => {
    const { orderId } = req.params;
    try {
        const order = await Order.findOne({ _id: orderId, user: req.user._id });

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found or you don't have permission to cancel this order"
            });
        }

        if (order.status === 'canceled') {
            return res.status(400).json({
                success: false,
                message: "Order is already canceled"
            });
        }

        order.status = 'canceled';
        await order.save();

        req.io.to(req.user._id).emit("orderCanceled", {
            success: true,
            message: "Your order has been canceled",
        });

        return res.status(200).json({
            success: true,
            message: "Order canceled successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    placeOrder,
    getAllOrders,
    cancelOrder
}