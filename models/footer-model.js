const mongoose = require('mongoose');
// const data = require('../data/data');

const {Schema} = mongoose;

const footerSchema = new Schema({
    firstAndLastNameFooter: {
        type: String,
        required: [true, 'A first and last name are required.'],
        minlength:[1,'Minimum length for the first and last name is 6 characters.']
    },
    emailFooter: {
        type: String,
        required: [true, 'An email is required.'],
        minlength:[1,'Minimum length for the email is 10 characters.']
    },
    phoneFooter: {
        type: Number,
        required: [true, 'The phone number is required.'],
        minlength:[1,'Minimum length for the phone number is 10 characters.']
    },
});

const Footer = mongoose.model('Footer', footerSchema);
module.exports = Footer;