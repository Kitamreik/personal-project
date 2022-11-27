// mongoose
// schema
const mongoose = require('mongoose');
const {Schema} = mongoose;
<<<<<<< HEAD
let GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');
=======
>>>>>>> version-2

// call the schema
// mod exports start/schema call
const outreachSchema = new Schema ({
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
  email: {
      type: String,
      required: [true, 'An email is required.'],
      minlength:[1,'Minimum length for the email is 10 characters.']
  },
  phoneNumber: {
      type: Number,
      required: [true, 'The phone number is required.'],
      minlength:[1,'Minimum length for the phone number is 10 characters.']
  },
  reason: {
      type: String,
  }
});

const Outreach = mongoose.model('Outreach', outreachSchema);

// end
module.exports = Outreach;
// mod exports

// DO NOT TOUCH