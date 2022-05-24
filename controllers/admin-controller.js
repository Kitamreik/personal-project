const express = require('express');
const data = require('../data/data');
// const Footer = require('../models/footer-model');
const User = require('../models/user-model');
const passport = require('passport');

module.exports = {
    admin: (request, response) => {
        // Uncomment this line of code to render the page without authentication
        // response.render('pages/admin', {
        //     data: data
        // }); 
        if (request.isAuthenticated()) {
            response.render('pages/admin', {
                data: data
            }); 
        } else {
            response.redirect('/login');
        }
        
    },
    create_log: (request, response) => {
        // Uncomment this line of code to render the page without authentication
        // response.render('pages/createlog', {
        //     data: data
        // }); 
        if (request.isAuthenticated()) {
            response.render('pages/createlog', {
                data: data
            });
        } else {
            response.redirect('/login');
        }
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
    delete_log: (request, response) => {
        // Uncomment this line of code to render the page without authentication
        // response.render('pages/deletelog', {
        //     data: data
        // });
        if (request.isAuthenticated()) {
            response.render('pages/deletelog', {
                data: data
            });
        } else {
            response.redirect('/login');
        }
        User.deleteOne({id, id}), error => {
            if (error) {
                return error;
            } else {
                response.redirect('pages/admin');
            }};
    },
    login: (request, response) => {
        response.render('pages/login', {
            data: data
        });
    },
    read_log: (request, response) => {
        // Uncomment this line of code to render the page without authentication
        // response.render('pages/readlog', {
        //     data: data
        // });
        if (request.isAuthenticated()) {
            response.render('pages/readlog', {
                data: data
            });
        } else {
            response.redirect('/login');
        }
    },
    update_log: (request, response) => {
        // Uncomment this line of code to render the page without authentication
        // response.render('pages/updatelog', {
        //     data: data
        // });
        if (request.isAuthenticated()) {
            response.render('pages/updatelog', {
                data: data
            });
        } else {
            response.redirect('/login');
        }
        const {id} = request.params;
        const {username, password, googleId} = req.body;
        User.findByIdAndUpdateid, {set: {
            userSchema: userSchema
        }},  {new: true}, error => {
            if (error) {
                return error;
            } else {
                response.redirect('pages/updatelog');
            }
        };
    },
};

/*
let currentDate = Date();
// remember that this is a variable you can use anywhere
// controller --> sending data --> the logic --> use the date variable

*/