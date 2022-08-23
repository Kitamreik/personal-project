const express = require('express');
const passport = require('passport');
const data = require('../data/data');
const createData = require('../data/create-data');
const User = require('../models/user-model');
const Footer = require('../models/footer-model');
const Create = require('../models/old-create-model');
const CreateDuo = require('../models/create-model');
const Remove = require('../models/remove-model');
const Update = require('../models/update-model');

module.exports = {
    admin: (request, response) => {
        // Uncomment this line of code to render the page without authentication
        response.render('pages/admin', {
            data: data
        }); 
        if (request.isAuthenticated()) {
            response.render('pages/admin', {
                data: data
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
        // we create data here
        response.render('pages/createlog');
        if (request.isAuthenticated()) {
            response.render('pages/createlog');
        } else {
            response.redirect('/login');
        }
    },
    all_remove: (request, response) => {
        // Experimental Code for Form
        if (request.isAuthenticated()) {
            Remove.find({}, (error, allRemove) => {
                if (error) {
                    return error;
                } else {
                    response.render('pages/readlog', {
                        removelogArray: allRemove
                    });
                }
            })
        }
    },
    remove_log: (request, response) => {
        // Uncomment this line of code to render the page without authentication
        response.render('pages/deletelog', {
            data: data
        });
        if (request.isAuthenticated()) {
            response.render('pages/deletelog', {
                data: data
            });
        } else {
            response.redirect('/login');
        }
        User.RemoveOne({id, id}), error => {
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

    // MVP route in admin console
    read_log_replika: (request, response) => {
        response.render('pages/replika-readlog');
        // if (request.isAuthenticated()) {
        //     response.render('pages/replika-readlog');
        // } else {
        //     response.redirect('/login');
        // }
    },
    // MVP route in admin console


    all_update: (request, response) => {
        // Experimental Code for Form
        if (request.isAuthenticated()) {
            Update.find({}, (error, allUpdate) => {
                if (error) {
                    return error;
                } else {
                    response.render('pages/readlog', {
                        updatelogArray: allUpdate
                    });
                }
            })
        }
    },
    update_log: (request, response) => {
        // Uncomment this line of code to render the page without authentication
        response.render('pages/updatelog', {
            data: data
        });
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
    // Within log Ctrl in documentation/maintenance
    read_log_post: (request, response) => {
        // Old Create Model- matches log ctrl
        const {firstAndLastName, Email, Phone, Synopsis} = request.body;
        const create = new Create ({
            firstAndLastName: firstAndLastName,
            Email: Email,
            Phone: Phone,
            Synopsis: Synopsis
        });
        create.save();
        response.redirect('/admin/readlog');
        },
    read_log_post_duo: (request, response) => {
        const {firstAndLastNameCreate, emailCreate, phoneCreate, synopsisCreate} = request.body;
        const createduo = new CreateDuo ({
            firstAndLastNameCreate: firstAndLastNameCreate,
            emailCreate: emailCreate,
            phoneCreate: phoneCreate,
            synopsisCreate: synopsisCreate
        });
        createduo.save();

        response.redirect('/admin/readlog');
    },
    read_log_post_remove: (request, response) => {
        const {firstAndLastNameRemove, emailRemove, phoneRemove, synopsisRemove, studentRemoveRecord} = request.body;
        const remove = new Remove ({
            firstAndLastNameRemove: firstAndLastNameRemove,
            emailRemove: emailRemove,
            phoneRemove: phoneRemove,
            synopsisRemove: synopsisRemove,
            studentRemoveRecord: studentRemoveRecord
        });

        remove.save();
        response.redirect('/admin/readlog');
    },
    read_log_post_update: (request, response) => {
        const {firstAndLastNameUpdate, emailUpdate, phoneUpdate, synopsisUpdate, studentUpdateRecord} = request.body;
        const update = new Update ({
            firstAndLastNameUpdate: firstAndLastNameUpdate,
            emailUpdate: emailUpdate,
            phoneUpdate: phoneUpdate,
            synopsisUpdate: synopsisUpdate,
            studentUpdateRecord: studentUpdateRecord
        });

        update.save();
        response.redirect('/admin/readlog');
    },
    read_footer: (request, response) => {
        if (request.isAuthenticated()) {
            Footer.find({}, (error, allFooter) => {
                if (error) {
                    return error;
                } else {
                    response.render('pages/readlog', {
                        footerArray: allFooter
                    });
                }
            })
        }
        const {firstAndLastNameFooter, emailFooter, phoneFooter} = request.body;
        const readfooter = new Footer ({
            firstAndLastNameFooter: firstAndLastNameFooter,
            emailFooter: emailFooter,
            phoneFooter: phoneFooter
        }); 

        readfooter.save();
        response.redirect('/admin/readlog');
    }
    // Within log Ctrl
};

/*
let currentDate = Date();
// remember that this is a variable you can use anywhere
// controller --> sending data --> the logic --> use the date variable

*/