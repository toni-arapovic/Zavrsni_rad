const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    dateAdded:{
        type: Date,
        required: true,
        default: Date.now
    },
    popular:{
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema)