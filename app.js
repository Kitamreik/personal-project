require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const app = express();
// const PORT = 3000;
const PORT = process.env.PORT || 3000;

// Morgan Functionality 
const morgan = require('morgan');
app.use(morgan('dev'));

// Adding Path module and EJS to app.js 
const path = require('node:path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');

// Requiring Method Override
const methodOverride =  require('method-override');
app.use(methodOverride('_method'));

// Adding Functionality to app.js
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(session({
    secret: process.env.SECRET_KEY, // note that secrets are manadatory
    // secret explanation
    /*
    This is the secret used to sign the session ID cookie. This can be either a string for a single secret, or an array of multiple secrets. If an array of secrets is provided, only the first element will be used to sign the session ID cookie, while all the elements will be considered when verifying the signature in requests. The secret itself should be not easily parsed by a human and would best be a random set of characters. A best practice may include:
    The use of environment variables to store the secret, ensuring the secret itself does not exist in your repository.
    Periodic updates of the secret, while ensuring the previous secret is in the array.
    Using a secret that cannot be guessed will reduce the ability to hijack a session to only guessing the session ID (as determined by the genid option).
    Changing the secret value will invalidate all existing sessions. In order to rotate the secret without invalidating sessions, provide an array of secrets, with the new secret as first element of the array, and including previous secrets as the later elements.

    */
    resave: false, 
    //Resave explanation
    /*
    Forces the session to be saved back to the session store, even if the session was never modified during the request. Depending on your store this may be necessary, but it can also create race conditions where a client makes two parallel requests to your server and changes made to the session in one request may get overwritten when the other request ends, even if it made no changes (this behavior also depends on what store you're using).
    The default value is true, but using the default has been deprecated, as the default will change in the future. Please research into this setting and choose what is appropriate to your use-case. Typically, you'll want false.
    How do I know if this is necessary for my store? The best way to know is to check with your store if it implements the touch method. If it does, then you can safely set resave: false. If it does not implement the touch method and your store sets an expiration date on stored sessions, then you likely need resave: true.
    */ 
    saveUninitialized: false
    // explanation
    /*
    Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified. Choosing false is useful for implementing login sessions, reducing server storage usage, or complying with laws that require permission before setting a cookie. Choosing false will also help with race conditions where a client makes multiple parallel requests without a session.
    The default value is true, but using the default has been deprecated, as the default will change in the future. Please research into this setting and choose what is appropriate to your use-case.
    Note if you are using Session in conjunction with PassportJS, Passport will add an empty Passport object to the session for use after a user is authenticated, which will be treated as a modification to the session, causing it to be saved. This has been fixed in PassportJS 0.3.0
    */

}));

// initialize passport
app.use(passport.initialize());

// passport to use session
app.use(passport.session());

const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

require('./config/connection');

//Server
app.listen(PORT, () => {
    console.log(`The server is ready and all ears on port ${PORT}!`);
    console.log(`http://localhost:${PORT}`);
    console.log(`Google Analytics: https://analytics.google.com/analytics/web/#/p318060884/reports/reportinghub?params=_u..nav%3Dmaui&collectionId=life-cycle`);
    console.log(`MongoDB: https://cloud.mongodb.com/v2/6283ea2dc31b1101d771a537#/metrics/replicaSet/62f3348909ca555b91abfba6/explorer/personalProject/outreaches/find`);
    console.log(`Student Deployment 22-23: https://docs.google.com/document/d/1a_iW2DCEWnRKddPolTn6nRfNgbj6eQ7QIEEwYHt0iig/edit?usp=sharing`);
});

// Read: HTTP Status Codes: https://www.educative.io/answers/how-to-use-the-nodejs-httpserverresponsestatuscode-property