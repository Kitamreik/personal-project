const express = require('express');
const passport = require('passport');
const data = require('../data/data');
const createData = require('../data/create-data');
const User = require('../models/user-model');
const Footer = require('../models/footer-model');
const Create = require('../models/old-create-model');
const Remove = require('../models/remove-model');
const Update = require('../models/update-model');
const { response } = require('express');

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
        // response.render('pages/createlog');
        // if (request.isAuthenticated()) {
            response.render('pages/createlog');
        // } else {
        //     response.redirect('/login');
        // }
        
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
    all_update: (request, response) => {
        // Experimental Code for Form
        if (request.isAuthenticated()) {
            Update.find({}, (error, allUpdate) => {
                if (error) {
                    return error;
                } else {
                    response.render('pages/readlog', {
                        removelogArray: allUpdate
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
    // Within log Ctrl
    read_log_post: (request, response) => {
        const {firstAndLastNameCreate, emailCreate, phoneCreate, synopsisCreate} = request.body;
        const create = new Create ({
            firstAndLastNameCreate: firstAndLastNameCreate,
            emailCreate: emailCreate,
            phoneCreate: phoneCreate,
            synopsisCreate: synopsisCreate
        });
        create.save();

        response.redirect('/admin/readlog');
    },
    read_log_post_remove: (request, response) => {
        const {firstAndLastName, emailRemove, phoneRemove, synopsisRemove, studentRemoveRecord} = request.body;
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