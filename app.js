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
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');

// Requiring Method Override
const methodOverride =  require('method-override');
app.use(methodOverride('_method'));

// Adding Functionality to app.js
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false, 
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

require('./config/connection');

//Server
app.listen(PORT, () => {
    console.log(`The server is ready and all ears on port ${PORT}!`);
    console.log(`Google Analytics: https://analytics.google.com/analytics/web/#/p318060884/reports/reportinghub?params=_u..nav%3Dmaui&collectionId=life-cycle`);
    console.log(`MongoDB: https://account.mongodb.com/account/login?n=%2Fv2%2F6283ea2dc31b1101d771a537%23metrics%2FreplicaSet%2F6283eeed1c1b0a10f8ebf0fc%2Fexplorer%2FpersonalProject%2Fcreates%2Ffind`);
    console.log(`Back End Docs: https://docs.google.com/document/d/1-nz1wlTWDfKy-1bZMHzepnRB14c82uRvvoj7yx8obTA/edit?usp=sharing`);
});

