// DO NOT TOUCH
const express = require('express');
// const passport = require('passport');
const User = require('../models/outreach-model');

module.exports = {
    // accept into admin console or redirect to register
    admin: (request, response) => {
        // Uncomment this line of code to render the page without authentication
        response.render('pages/admin', {
            // data: data
        }); 

        // authentication
        // if (request.isAuthenticated()) {
        //     response.render('pages/admin', {
        //         // data: data
        //     }); 
        //     // auth2 is initialized with gapi.auth2.init() and a user is signed in.
        //     // experimental ID tracking
        //     // if (auth2.isSignedIn.get()) {
        //     //     var profile = auth2.currentUser.get().getBasicProfile();
        //     //     console.log('ID: ' + profile.getId());
        //     //     console.log('Full Name: ' + profile.getName());
        //     //     console.log('Given Name: ' + profile.getGivenName());
        //     //     console.log('Family Name: ' + profile.getFamilyName());
        //     //     console.log('Image URL: ' + profile.getImageUrl());
        //     //     console.log('Email: ' + profile.getEmail());
        //     // }
        // } else {
        //     response.redirect('/register');
        // }
    },
    // render the outreach log page or redirect to admin
    outreach_log: (request, response) => {
        // without authentication
        response.render('pages/outreach-log');

        // authentication
        // if (request.isAuthenticated()) {
        // response.render('pages/outreach-log');
        // } else {
        //     response.redirect('/admin');
        // }
    },
    edit: (request, response) => {
        // without authentication 
        response.render('pages/edit');

        // authentication
        // if (request.isAuthenticated()) {
        //     response.render('pages/edit');
        //     } else {
        //         response.redirect('/admin');
        //     }
    }, 
    login: (request, response) => {
        response.render('pages/login', {
            // data: data
        });
        const {username, password, googleId} = req.body;
        const userSchema = new Schema({
            username: {
              type: String,
            },
            password: {
              type: String,
            },
            googleId: {
              type: String,
            }
          });
        newSchema.save();
    },
    // find all of the clients - get or redirect to register
    all_clients: (request, response) => {
        // without authentication
        response.render('pages/outreach-log');
        

        // authentication
        // if (request.isAuthenticated()) {
        //     User.find({}, (error, foundUser) => {
        //         if(error){
        //             return error;
        //         } else {
        //             response.render('pages/outreach-log', {
        //                 user: foundUser
        //             });
        //         };
        //     });
        // } else {
        //     response.redirect('/register')
        // }
    },
    // find the specific client to update or redirect to register
    update_outreach_get: (request, response) => {
        // without authentication
        response.render('pages/edit');

        // authentication
        // if (request.isAuthenticated()) {
        //     const {_id} = request.params;
        //     User.findOne({_id: _id}, (error, foundUser) => {
        //         if(error) {
        //             return error;
        //         } else {
        //             response.render('pages/edit', {user: foundUser})
        //         };
        //     });
        // } else {
        //     response.redirect('/register')
        // }
    }
};
