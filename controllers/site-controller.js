// DO NOT CHANGE
const express = require('express');
const passport = require('passport');
const outreachData = require ('../data/outreach-data');

module.exports = {
  // add new pages here:
  class_interest: (request, response) => {
    response.render('pages/class-interest', {
        // data: data
    });
  },

  client_relations: (request, response) => {
    response.render('pages/client-relations', {
        // data: data
    });
  },

  summer_projects: (request, response) => {
    response.render('pages/summer-projects', {
        // data: data
    });
  },


  // do NOT edit
    about: (request, response) => {
        response.render('pages/videogallery', {
            // data: data
        });
    },
    contact_us: (request, response) => {
        response.render('pages/contactus', {
            // data: data
        });
    },
    login: (request, response) => {
        response.render('pages/login', {
            // data: data
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
        req.logout(function(err) {
            if (err) { return next(err); }
            res.redirect('/login');
          });
    },
    index: (request, response) => {
        response.render('pages/index');
    },
    term_projects: (request, response) => {
        response.render('pages/map', {
            // data: data
        });
    },
    photogallery: (request, response) => {
        response.render('pages/photogallery', {
            // data: data
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
    outreach_form: (request, response) => {
        response.render('pages/outreach-form');
    },
    june_showcase: (request, response) => {
        response.render('pages/juneteenth-showcase');
    },
    tj_quiz: (request, response) => {
        response.render('pages/tj-quiz');
    },
    tj_answers: (request, response) => {
        response.render('pages/tj-answers');
    },
    
    google_get: passport.authenticate('google', {scope: ['openid', 'profile', 'email']}),
    google_redirect_get: [
    passport.authenticate('google', {failureRedirect: '/login'}),
    function(request, response) {
      response.redirect('/admin');
    }
  ]
};