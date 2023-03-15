// DO NOT TOUCH
const express = require('express');
const passport = require('passport');
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

        response.redirect('/admin/outreach-log');
    },
    // show all entries
    all_entries: (request, response) => {
        Author.find({}, (error, outreachArray) => {
          if(error){
            return error;
          } else {
            response.render('/admin/outreach-log', {
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
    
        response.redirect('/admin/outreach-log'); 
    },
    // use the put method to update a log
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
              response.redirect('/admin/outreach-log');
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
            response.redirect('/admin/outreach-log')
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
            response.render('pages/admin/outreach-detail', {
            // see update-get in adminCtrl and outreach-detail.ejs for more info why
            outreach: foundOutreach
            //  CB -->  author: foundAuthor
          });
          }
        })
    },

    // find all of the clients - get
    all_clients: (request, response) => {
        User.find({}, (error, foundUser) => {
            if(error){
                return error;
            } else {
                response.render('pages/outreach-log', {
                    foundUser: foundUser
                });
            };
        });
    },

    // find one of the clients 
    client_detail: (request, response) => {
        const {_id} = request.params;
        User.findOne({_id: _id}, (error, foundUser) => {
            if(error) {
                return error;
            } else {
                response.render('pages/outreach-log', {foundUser: foundUser})
            };
        });
    },

    // update the outreach/client info
    update_outreach: (request, response) => {
        const {_id} = request.params;
        const {firstName, lastName, email, phoneNumber, reason} = request.body;
        User.findByIdAndUpdate(_id, {$set: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            reason: reason
            }}, {new: true}, error => {
                if(error) {
                    return error;
                } else {
                    response.redirect('/admin');
                };
            }); 
    },

    // delete the client
    client_delete: (request, response) => {
        const {_id} = request.params;
        User.deleteOne({_id: _id}, error => {
            if(error) {
                return error;
            } else {
                response.redirect('/admin')
            };
        });
    }
};
