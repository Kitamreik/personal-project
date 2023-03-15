// DO NOT TOUCH
const express = require('express');
const passport = require('passport');
// const outreachData = require ('../data/outreach-data');
const Outreach = require('../models/outreach-model');

module.exports = {
    // add new code here
    junk_code: (request, response) => {
        // we create data here
        response.render('pages/junk-code');
    },
    // DO NOT TOUCH
    admin: (request, response) => {
    //   if (request.isAuthenticated()) {
    //     response.render('pages/admin', {
    //     //   copyrightYear: siteData.year
    //     }); 
        
    //     // experimental ID tracking
    //     /*
    //     // auth2 is initialized with gapi.auth2.init() and a user is signed in.
    //     if (auth2.isSignedIn.get()) {
    //         var profile = auth2.currentUser.get().getBasicProfile();
    //         console.log('ID: ' + profile.getId());
    //         console.log('Full Name: ' + profile.getName());
    //         console.log('Given Name: ' + profile.getGivenName());
    //         console.log('Family Name: ' + profile.getFamilyName());
    //         console.log('Image URL: ' + profile.getImageUrl());
    //         console.log('Email: ' + profile.getEmail());
    //     }
    //     */
    // } else {
    //     response.redirect('/login');
    // }
        // Uncomment this line of code to render the page without authentication
        response.render('pages/admin', {
        }); 
    },
    // as an admin, manage all of the logs you see
    outreach_log: (request, response) => {
      if(request.isAuthenticated()){
        Outreach.find({}, (error, outreachArray) => {
          if(error){
            return error;
          } else {
            response.render('/admin/outreach-log', {
            //   pull from the controllers
              outreachArray: outreachArray
            });
          }
        })
      } else {
        response.redirect('/login')
      }
        
        // Uncomment this line of code to render the page without authentication
        // we create data here
        response.render('/admin/outreach-log', {
          //   pull from the controllers
            outreachArray: outreachArray
          });
      
    },
    // create a record from the form
    create_author: (request, response) => {
        if(request.isAuthenticated()){
          response.render('pages/outreach-form', {
            // copyrightYear: siteData.year,
          });
        } else {
          response.redirect('/login')
        }
        // without auth
        // response.render('pages/outreach-form');
    },
    // be able to get the updates from the update form
    author_update_get: (request, response) => {
        if(request.isAuthenticated()){
          const { _id } = request.params;
          Outreach.findOne({_id: _id}, (error, foundOutreach) => {
            if(error) {
              return error;
            } else {
              response.render('pages/update-form', {
                // copyrightYear: siteData.year,
                foundOutreach: foundOutreach
              });
            }
          });   
        } else {
          response.redirect('/login')
        }
        // without auth
        response.render('pages/admin/update-form');
      },
    // save the user data when they login
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
