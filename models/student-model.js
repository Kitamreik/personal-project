// mongoose
// schema
const mongoose = require('mongoose');
const {Schema} = mongoose;

// call the schema
// mod exports start/schema call

const studentSchema = new Schema ({
    firstName: {
        type: String,
        required: [true, 'A first name are required.'],
        minlength:[1,'Minimum length for the first name is 6 characters.']
    },
    lastName: {
        type: String,
        required: [true, 'A last name are required.'],
        minlength:[1,'Minimum length for the last name is 6 characters.']
    },
    dateEntry: {
        type: String,
        required: [true, 'A date is required.'],
    },
    info: {
        type: String,
        required: [true, 'Information is required here.'],
        minlength:[1,'Minimum length for the phone number is 10 characters.']
    },
    question: {
        type: String,
        required: [true, 'Information is required here.'],
        minlength:[1,'Minimum length for the phone number is 10 characters.']
    },
})

const Student = mongoose.model('Student', studentSchema);

// end
module.exports = Student;
// mod exports