const express = require('express');
const passport = require('passport');


module.exports = {
    web_index: (request, response, next) => {
        response.json("This is the webmaster index page in development.")
        /*
        The current directory of routes entails: http://localhost:4200/webmaster, http://localhost:4200/webmaster/login, http://localhost:4200/webmaster/panel, http://localhost:4200/webmaster/logout, http://localhost:4200/webmaster/register, http://localhost:4200/webmaster/password-error, http://localhost:4200/webmaster/404, http://localhost:4200/webmaster/500
        */ 
    },
    web_login: (request, response, next) => {
        console.log("Webmaster login page")
        response.render('pages/web-login');
    },
    web_login_post: (request, response, next) => {
        const { username, password } = request.body;
        console.log('Login attempt:', { username, password });
        // Here, you can implement your own login logic without session management
        //response.redirect('/admin/panel');

        //Google Oauth
       

    },
    web_logout: (request, response, next) => {
        // new code as of 6/2022 - the correct logout function
        request.logout(function(err) {
          // destroy the session for the user
          if (err) { return next(err); }
          // redirect back to the homepage
          response.redirect('/');
        });
      },
      web_register_get: (request, response, next) => {
        response.render('pages/web-register', {});
      },
      web_register_post:(request, response, next) => {
        const {username, password} = request.body;
        User.register({username: username}, password, (error, user) => {
          if (error) {
            console.log(error);
            response.redirect('/');
            // check the routes folder to check --> siteRouter --> redirect trigger --> GET
          } else {
            // if they are successful 
            passport.authenticate('local')(request, response, () => {
              response.redirect('webmaster/login');
              // you created your account --> login --> GET
            });
          };
        });
      },
    panel: (request, response, next) => {
        response.json('Rendering admin panel');
        
    },
    password_error: (request, response, next) => {
        response.json('Password error');
    },
    server_side_error: (request, response, next) => {
        response.render('pages/500', {
            // data: data
        });
    },
    error_page: (request, response, next) => {
        response.render('pages/404', {
            // data: data
        });
    },
    // do NOT TOUCH
    web_google_get: passport.authenticate('google', {scope: ['openid', 'profile', 'email']}),
    web_google_redirect_get: [
        passport.authenticate('google', {failureRedirect: '/'}),
        function(request, response, next) {
        // Successful Authentication Authorization
        response.redirect('webmaster/admin');
        }
    ]
}
