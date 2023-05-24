// DO NOT TOUCH
const express = require('express');
const passport = require('passport');
const outreachData = require ('../data/outreach-data');
const Outreach = require('../models/outreach-model');

// NO MORE EDITS
// Note: isAuthenticated will disable local login, however will work on the deployed site

module.exports = {
    // add new code here
    junk_code: (request, response) => {
        // we create data here
        response.render('pages/junk-code');
    },
    // admin side database management
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
    // to let the students read the logs without the ability to edit
    student_log_read: (request, response) => {
      // we create data here
      Outreach.find({}, (error, outreachArray) => {
        if(error){
          return error;
        } else {
      response.render('pages/outreach-detail', {
        //   copyrightYear: siteData.year,
          outreachArray: outreachArray
        });
    }})
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
      // ensures the data is saved to the outreach log
  },
      // show all entries - ensures the data is saved to the outreach log
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
    log_delete: (request, response) => {
      const { _id } = request.params;
      Outreach.deleteOne({_id: _id}, error => {
        if(error) {
          return error;
        } else {
          response.redirect('/admin') // keep to admin to allow for seamless admin-side experience
  
  
          //a redirect to index, login works
          // there is a log of the delete as a redirect 
          // the entries are deleted
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
        response.render('pages/outreach-log', {
        // see update-get in adminCtrl and outreach-detail.ejs for more info why
        // outreach: foundOutreach
        outreachData: outreachData
        //  CB -->  author: foundAuthor
      });
      }
    })
},
  
// DO NOT TOUCH OR EDIT FOR ANY REASON 5/8/2023 ABOVE THIS POINT

    // OG ROUTES
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

  // use the put method to update a log- you want to be able to GET ALL of the updates as the admin
  log_update_put: (request, response) => {
    const { _id } = request.params;
    const {firstName, lastName, email, phoneNumber, reason} = request.body;
    Outreach.findByIdAndUpdate(_id, {$set: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
    
      }}, {new: true}, error => {
        if(error) {
          return error;
        } else {
          response.redirect('pages/update-form', {
            // see update-get in adminCtrl and outreach-detail.ejs for more info why
            foundOutreach: Outreach // the correct one as of May 2023
          }
          
          );
        }
      })    
  },
 
};