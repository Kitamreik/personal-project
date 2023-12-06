// DO NOT CHANGE
const User = require('../models/user-model');
const passport = require('passport');
const Outreach = require('../models/outreach-model');

// Debug note: the site controller should have the index, register-get, register-post, login-get, login-post, logout

// load the error page?
// response.status(500).send('Internal Server Error')

module.exports = {
  // add new pages here:
  student_directory:  (request, response) => {
    response.render('pages/student-directory', {
        // data: data
    });
  },

  project_directory: (request, response) => {
    response.render('pages/project-directory', {
        // data: data
    });
  },
  dev_updates: (request, response) => {
    response.render('pages/dev-updates', {
        // data: data
    });
  },
  class_reg: (request, response) => {
    response.render('pages/course-register', {
        // data: data
    });
  },
  update: (request, response) => {
    response.render('pages/update-form', {
        // works as of May 2023
        foundOutreach: Outreach
    });
  },
  form_confirmation: (request, response) => {
    response.render('pages/form-submit', {
        // data: data
    });
  },
  capstone_projects: (request, response) => {
    response.render('pages/capstone-projects', {
        // data: data
    });
  },
  grad_projects: (request, response) => {
    response.render('pages/grad-projects', {
        // data: data
    });
  },
  class_interest: (request, response) => {
    response.render('pages/class-interest', {
        // data: data
    });
  },
  jan_cohort_pics: (request, response) => {
    response.render('pages/jan-23-photogallery', {
        // data: data
    });
  },
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

  // do NOT edit - original
  about: (request, response) => {
      response.render('pages/videogallery', {

      });
  },
  contact_us: (request, response) => {
      response.render('pages/contactus', {
    
      });
  },
  index: (request, response) => {
    response.render('pages/index');
  },
  map: (request, response) => {
      response.render('pages/map', {
      });
  },
  photogallery: (request, response) => {
      response.render('pages/photogallery', {
      });
  },
  login: (request, response) => {
    response.render('pages/login')
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
    response.render('pages/register', {});
  },
  register_post:(request, response) => {
    // added in Code Along - differs from slides
    const {username, password} = request.body;
    User.register({username: username}, password, (error, user) => {
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

  june_showcase: (request, response) => {
    response.render('pages/juneteenth-showcase');
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

  //Deprecated 
  /*
    early_access: (request, response) => {
    response.render('pages/early-access', {
        // data: data
    });
  },
  new_year: (request, response) => {
    response.render('pages/new-year', {
        // data: data
    });
  },
  holiday_features: (request, response) => {
    response.render('pages/holiday-feature', {
        // data: data
    });
  },
  tj_quiz: (request, response) => {
    response.render('pages/tj-quiz');
  },
  tj_answers: (request, response) => {
    response.render('pages/tj-answers');
  },
  */
};