// DO NOT TOUCH
const express = require('express');
const passport = require('passport');
const outreachData = require ('../data/outreach-data');
const Outreach = require('../models/outreach-model');

module.exports = {
    // add new code here
    junk_code: (request, response) => {
        // we create data here
        response.render('pages/junk-code');
    },
     // add new code here
     admin_client_management: (request, response) => {
      // we create data here
      Outreach.find({}, (error, outreachArray) => {
        if(error){
          return error;
        } else {
      response.render('pages/admin-client-management', {
        //   copyrightYear: siteData.year,
          outreachArray: outreachArray
        });
    }})
  },
    // DO NOT TOUCH
    admin: (request, response) => {
      response.render('pages/admin'); // bypass authentication
      if (request.isAuthenticated()) {
        response.render('pages/admin', {
          // leave empty
        });
      } else {
        response.redirect('/login')
      }
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

    // Authentication Test
    // register when a log is created from the form
    create_author: (request, response) => {
      const {firstName, lastName, email, phoneNumber, reason} = request.body;
      const newOutreach = new Outreach ({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        reason: reason
      });
  
      newOutreach.save();
  
      response.redirect('pages/outreach-log'); 
  },
  // use the put method to update a log- you want to be able to GET ALL of the updates as the admin
  log_update_get: (request, response) => {
    const { _id } = request.params;
    const {firstName, lastName, email, phoneNumber, reason} = request.body;
    Outreach.findByIdAndUpdate(_id, {$set: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        reason: reason
      }}, {new: true}, error => {
        if(error) {
          return error;
        } else {
          response.redirect('pages/outreach-log', {
            // see update-get in adminCtrl and outreach-detail.ejs for more info why
            outreach: foundOutreach
            //  CB -->  author: foundAuthor
          }
          
          );
        }
      })    
  },
 // show all entries
 all_entries: (request, response) => {
  Outreach.find({}, (error, outreachArray) => {
    if(error){
      return error;
    } else {
      response.render('pages/outreach-log', {
      //   copyrightYear: siteData.year,
        outreachArray: outreachArray
      });
    }
  });
  },
  // show the detail of a log
  log_detail: (request, response) => {
    const {_id} = request.params;
    Outreach.findOne({_id: _id}, (error, foundOutreach) => {
      if(error) {
        return error;
      } else {
        response.render('pages/outreach-detail', {
        // see update-get in adminCtrl and outreach-detail.ejs for more info why
        outreach: foundOutreach
        //  CB -->  author: foundAuthor
      });
      }
    })
},
};
