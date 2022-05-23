const express = require('express');
const data = require('../data/data');
const User = require('../models/user-model');
// const Footer = require('../models/footer-model');
const passport = require('passport');

module.exports = {
    about: (request, response) => {
        response.render('pages/videogallery', {
            data: data
        });
    },
    contact_us: (request, response) => {
        response.render('pages/contactus', {
            data: data
        });
    },
    // create_log: (req, res) => {
    //     res.render('pages/createlog', {
    //         data: data
    //     });
    // },
    // delete_log: (req, res) => {
    //     res.render('pages/deletelog', {
    //         data: data
    //     });
    // },
    login: (request, response) => {
        response.render('pages/login', {
            data: data
        });
    },
    login_post: (request, response) => {
        const {username, password} = request.body;
        User.findOne({username: username}, (error, foundUser) => {
          if (error) {
            console.log(`The error at login is: ${error}`);
          } else {
            passport.authenticate('local')(request, response, () => {
              response.redirect("/admin");
            });
          };
       });
    },
    logout: (request, response) => {
        request.logout()
        response.redirect('/login');
    },
    index: (request, response) => {
        response.render('pages/index');
    },
    map: (request, response) => {
        response.render('pages/map', {
            data: data
        });
    },
    photogallery: (request, response) => {
        response.render('pages/photogallery', {
            data: data
        });
    },
    register_get: (request, response) => {
        response.render('pages/register');
    },
    register_post: (request, response) => {
        const {username, password} = request.body;
        User.register({username: username}, password, (error) => {
          if (error) {
            console.log(error);
            response.redirect('/register');
          } else {
            passport.authenticate('local')(request, response, () => {
              response.redirect('/admin');
            });
          };
        });
    },
    tj_quiz: (request, response) => {
        response.render('pages/tj-quiz');
    },
    tj_answers: (request, response) => {
        response.render('pages/tj-answers');
    },
    update_log: (request, response) => {
        response.render('pages/updatelog', {
            data: data
        });
    },
    auth_google: passport.authenticate('google', { scope: ['openid', 'profile', 'email']}),
    index_redirect: [passport.authenticate('google', {failureRedirect: '/login'}),
    function(req, res) {
        res.redirect('/admin');
    }]
};