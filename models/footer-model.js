const mongoose = require('mongoose');
const data = require('../data/data');

const {Schema} = mongoose;

const footerSchema = new Schema({
    firstAndLastName: data,
    emailAddress: data,
    phoneNumber: data
});

const Footer = mongoose.model('Footer', footerSchema);
module.exports = Footer;