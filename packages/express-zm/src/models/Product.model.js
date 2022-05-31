const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = model('Product', productSchema);