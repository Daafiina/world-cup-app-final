const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    category: String,
    size:{
        type:String
    },
    image: {
        filename: String,
        mimetype: String,
        size: Number,
        url: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model('products', schema);

module.exports = model;
