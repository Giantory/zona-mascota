const mongoose = require('mongoose');
const { Schema, model, Types } = mongoose;

const clientSchema = new Schema({
    userId:{
        type: Types.ObjectId , ref: 'User', required: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    }
})

module.exports = model('Client', clientSchema);