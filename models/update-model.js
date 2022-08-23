// DO NOT TOUCH
const mongoose = require('mongoose');
const {Schema} = mongoose;
const updateSchema = new Schema ({
    firstAndLastNameUpdate: {
        type: String,
        required: [true, 'A first and last name are required.'],
        minlength:[1,'Minimum length for the first and last name is 6 characters.']
    },
    emailUpdate: {
        type: String,
        required: [true, 'An email is required.'],
        minlength:[1,'Minimum length for the email is 10 characters.']
    },
    phoneUpdate: {
        type: Number,
        required: [true, 'The phone number is required.'],
        minlength:[1,'Minimum length for the phone number is 10 characters.']
    },
    synopsisUpdate: {
        type: String,
    },
    studentUpdateRecord: {
        type: String,
        required: [true, 'A first and last name are required.'],
        minlength:[1,'Minimum length for the first and last name is 6 characters.']
    }
});

const Update = mongoose.model('Update', updateSchema);
module.exports = Update;