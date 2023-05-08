// DO NOT TOUCH
// const express = require('express');
// const passport = require('passport');
const outreachData = require ('../data/outreach-data');
const Outreach = require('../models/outreach-model');

module.exports = {
    // show the entry that was created from the outreach model
    read_outreach: (request, response) => {
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
    // register when a log is created from the form
    create_author_log: (request, response) => {
        const {firstName, lastName, email, phoneNumber, reason} = request.body;
        const newOutreach = new Outreach ({
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
          reason: reason
        });
    
        newOutreach.save();
        response.render('pages/index') // yes- user experience

        
        // response.redirect('pages/outreach-log'); // NO - redirect and show on the outreach log page with all the data entries
    },
    // use the put method to update a log - the log control knows to capture the for data and update the right one
    log_update_put: (request, response) => {
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
    // delete a log
    log_delete: (request, response) => {
        const { _id } = request.params;
        Outreach.deleteOne({_id: _id}, error => {
          if(error) {
            return error;
          } else {
            response.redirect('pages/outreach-log')
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
}