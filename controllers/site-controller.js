// DO NOT CHANGE
// const express = require('express');
const User = require('../models/user-model');
const passport = require('passport');
// const outreachData = require ('../data/outreach-data');

module.exports = {
  // Deployed
  summer_projects: (request, response) => {
    response.render('pages/summer-projects', {
        // data: data
    });
  },
  // disabled until March 2023
  // 404
  class_interest: (request, response) => {
    response.render('pages/class-interest', {
        // data: data
    });
  },

  // add new pages here:
  server_side_error: (request, response) => {
    response.render('pages/500', {
        // data: data
    });
  },
  error_page: (request, response) => {
    response.render('pages/404', {
        // data: data
    });
  },
  client_relations: (request, response) => {
    response.render('pages/client-relations', {
        // data: data
    });
  },
  mentor_features: (request, response) => {
    response.render('pages/mentor-features', {
        // data: data
    });
  },
  holiday_features: (request, response) => {
    response.render('pages/holiday-feature', {
        // data: data
    });
  },

  // do NOT edit
  about: (request, response) => {
      response.render('pages/videogallery', {

      });
  },
  contact_us: (request, response) => {
      response.render('pages/contactus', {
    
      });
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
  index: (request, response) => {
    response.render('pages/index');
  },
  term_projects: (request, response) => {
      response.render('pages/map', {
      });
  },
  photogallery: (request, response) => {
      response.render('pages/photogallery', {
      });
  },
  // LOGIN - get
  login: (request, response) => {
    response.render('pages/login', {});
  },
  login_post: (request, response) => {
      const {username, password, googleId} = request.body;
     // New info
    const user = new User({
      username: username,
      password: password, 
      googleId: googleId
    });

    request.login(user, (error) => {
      if (error) {
        console.log(error)
        response.redirect('/login');
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/admin');
        });
      }
    });
    // New info
  },
  logout: (request, response) => {
    // new code as of 6/2022 - the correct logout function
    request.logout(function(err) {
      // destroy the session for the user
      if (err) { return next(err); }
      // redirect back to the homepage
      response.redirect('/');
    });
  },
  register_get: (request, response) => {
    response.render('pages/register');
  },
  register_post:(request, response) => {
    // added in Code Along - differs from slides
    const {username, password} = request.body;
    User.register({username: username}, password, (error) => {
      if (error) {
        console.log(error);
        response.redirect('/register');
        // check the routes folder to check --> siteRouter --> redirect trigger --> GET
      } else {
        // if they are successful 
        passport.authenticate('local')(request, response, () => {
          response.redirect('/login');
          // you created your account --> login --> GET
        });
      };
    });
  },
  outreach_form: (request, response) => {
    response.render('pages/outreach-form');
  },
  // do NOT TOUCH
  google_get: passport.authenticate('google', {scope: ['openid', 'profile', 'email']}),
  google_redirect_get: [
    passport.authenticate('google', {failureRedirect: '/login'}),
    function(request, response) {
      // Successful Authentication Authorization
      response.redirect('/admin');
    }
  ]
};