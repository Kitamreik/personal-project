// DO NOT TOUCH
const express = require('express');
const passport = require('passport');
const outreachData = require ('../data/outreach-data');

module.exports = {
    admin: (request, response) => {
        // Uncomment this line of code to render the page without authentication
        response.render('pages/admin', {
            // data: data
        }); 
        if (request.isAuthenticated()) {
            response.render('pages/admin', {
                // data: data
            }); 
            // auth2 is initialized with gapi.auth2.init() and a user is signed in.
            // experimental ID tracking
            if (auth2.isSignedIn.get()) {
                var profile = auth2.currentUser.get().getBasicProfile();
                console.log('ID: ' + profile.getId());
                console.log('Full Name: ' + profile.getName());
                console.log('Given Name: ' + profile.getGivenName());
                console.log('Family Name: ' + profile.getFamilyName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail());
            }
        } else {
            response.redirect('/login');
        }
    },
    outreach_log: (request, response) => {
        // we create data here
        response.render('pages/outreach-log');
        // if (request.isAuthenticated()) {
        //     response.render('pages/admin');
        // } else {
        //     response.redirect('/login');
        // }
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
};
