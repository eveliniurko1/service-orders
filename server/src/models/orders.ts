import mongoose from 'mongoose';

const OrderServiceSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    cost: {
        type: String,
        required: true,
    },
    discount: {
        type: String,
        required: true,
    },
    subtotal: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },

})

const OrderService = mongoose.model('OrderServices', OrderServiceSchema);
module.exports = OrderService;