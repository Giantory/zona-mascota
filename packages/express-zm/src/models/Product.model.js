const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    unit:{
        type: String,
        required: true 
    },
    stock: {
        type: Number,
        required: true   
    },
    purchasePrice: {
        type: Number,
        required: true
    },
    salePrice: {
        type: Number,
        required: true
    }   
})

module.exports = model('Product', productSchema);