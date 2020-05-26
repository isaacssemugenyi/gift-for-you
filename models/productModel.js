const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: 'This field can\'t be empty'
    },
    price: {
        type: Number,
        required: 'This field can\'t be empty'
    },
    image : {
        type: String,
        default: 'public/uploads/no-image.jpg'
        // required: 'You need to select an Image'
    },
    description: {
        type: String,
        required: 'This field can\'t be empty'
    },
    supplier: {
        type: String,
        required: 'This field can\'t be empty'
    },
    phone : {
        type: Number,
        required: 'This field can\'t be empty'
    }
});

module.exports = mongoose.model('Product', productSchema);