const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    products:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    adress:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    postalCode:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Order', orderSchema)