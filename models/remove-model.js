// DO NOT TOUCH
const mongoose = require('mongoose');
const {Schema} = mongoose;
const removeSchema = new Schema ({
    firstAndLastNameRemove: {
        type: String,
        required: [true, 'A first and last name are required.'],
        minlength:[1,'Minimum length for the first and last name is 6 characters.']
    },
    emailRemove: {
        type: String,
        required: [true, 'An email is required.'],
        minlength:[1,'Minimum length for the email is 10 characters.']
    },
    phoneRemove: {
        type: Number,
        required: [true, 'The phone number is required.'],
        minlength:[1,'Minimum length for the phone number is 10 characters.']
    },
    synopsisRemove: {
        type: String,
    },
    studentRemoveRecord: {
        type: String,
        required: [true, 'A first and last name are required.'],
        minlength:[1,'Minimum length for the first and last name is 6 characters.']
    }
});

const Remove = mongoose.model('Remove', removeSchema);
module.exports = Remove;