const express = require('express');
const passport = require('passport');
const data = require('../data/data');
const createData = require('../data/create-data');
const User = require('../models/user-model');
const Create = require('../models/create-model');

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
    all_create: (request, response) => {
        // Experimental Code for Form
        if (request.isAuthenticated()) {
            Create.find({}, (error, allCreate) => {
                if (error) {
                    return error;
                } else {
                    response.render('pages/readlog', {
                        createlogArray: allCreate
                    });
                }
            })
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
        const {firstAndLastName, Email, Phone, Synopsis} = request.body;

        newSchema.save();

        response.redirect('pages/readlog');
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
    read_log: (request, response) => {
        // Uncomment this line of code to render the page without authentication
        // response.render('pages/readlog', {
        //     data: data
        //     // createData: createData
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