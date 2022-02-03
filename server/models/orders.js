const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    products:{
        type: Object,
        required: true,
    },
    name:{
        type: String,
        required: false,
    },
    email:{
        type: String,
        required: false,
    },
    adress:{
        type: String,
        required: false,
    },
    city:{
        type: String,
        required: false,
    },
    postalCode:{
        type: String,
        required: false,
    },
    phoneNumber:{
        type: String,
        required: false,
    },
    username:{
        type: String,
        required: false,
    },
    totalSum:{
        type: String,
        required: false,
    },
    dateAdded:{
        type: Date,
        required: true,
        default: Date.now
    },
})

module.exports = mongoose.model('Order', orderSchema)