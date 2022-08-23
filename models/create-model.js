const mongoose = require('mongoose');
// const data = require('../data/data');
// const createdata = require('../data/create-data');

const {Schema} = mongoose;

const createduoSchema = new Schema({
    firstAndLastNameCreate: {
        // id: uuid(),
        type: String,
        required: [true, 'A first and last name are required.'],
        minlength:[1,'Minimum length for the first and last name is 6 characters.']
    },
    emailCreate: {
        // id: uuid(),
        type: String,
        required: [true, 'An email is required.'],
        minlength:[1,'Minimum length for the email is 10 characters.']
    },
    phoneCreate: {
        // id: uuid(),
        type: Number,
        required: [true, 'The phone number is required.'],
        minlength:[1,'Minimum length for the phone number is 10 characters.']
    },
    synopsisCreate: {
        // id: uuid(),
        type: String,
    }
});

const CreateDuo = mongoose.model('CreateDuo', createduoSchema);
module.exports = CreateDuo;