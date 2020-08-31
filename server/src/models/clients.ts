import mongoose from 'mongoose';

const ClientsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
})

const Clients = mongoose.model('Clients', ClientsSchema);

module.exports = Clients;