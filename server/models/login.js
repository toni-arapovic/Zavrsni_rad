const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
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
    },
    orders:{
        type: Object,
        required: false,
    }
})

module.exports = mongoose.model('Login', loginSchema)