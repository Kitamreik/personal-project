// DO NOT TOUCH

const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const {Schema} = mongoose;
let GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

const userSchema = new Schema ({
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

const User = mongoose.model('User', userSchema);

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

// passport.use(User.createStrategy());

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username, name: user.displayName });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/admin",
},
function(accessToken, refreshToken, email, cb) {
  console.log(email);
  User.findOrCreate({ googleId: email.id, username: email.displayName}, function (err, user) {
    return cb(err, user);
  });
}
));

module.exports = User;