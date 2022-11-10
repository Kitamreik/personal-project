// DO NOT TOUCH
const express = require('express');
const passport = require('passport');
const User = require('../models/outreach-model');

module.exports = {
    //  create - post
    post_outreach: (request, response) => {
        const {firstName, lastName, email, phoneNumber, reason} = request.body;
        const outreach = new User ({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            reason: reason 
        });
        outreach.save();

        response.redirect('/index');
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
