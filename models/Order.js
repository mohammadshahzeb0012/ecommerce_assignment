const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }],
    total: { type: Number, required: true },
    status: { type: String, default: 'pending' },
});

const orderModel = mongoose.model('Order', OrderSchema);

module.exports = orderModel