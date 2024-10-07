const express = require('express');
const webCtrl = require('../controllers/web-controller');
const router = express.Router();

// Middleware to check if user is authenticated
const isAuthenticated = (request, response, next) => {
    next();
};

// Middleware to redirect authenticated users
const redirectIfAuthenticated = (request, response, next) => {
    next();
};

router.route('/').get(webCtrl.web_index);

// Render login page
router.route('/login').get(webCtrl. web_login, redirectIfAuthenticated);

// Handle login form submission
router.route('/login').post(webCtrl. web_login_post);

// Admin panel route
router.route('/panel').get(webCtrl.panel, isAuthenticated);

router.route('/logout')
// PURPOSE: Logs the user out if signed in
    .get(webCtrl.web_logout);   

router.route('/register')
// PURPOSE: To see a register for and to create a new User
    .get(webCtrl.web_register_get)
    .post(webCtrl.web_register_post);

// router.route('/auth/google')
// // PURPOSE: initiates Google authentication 
//     .get(webCtrl.web_google_get);

// router.route('/auth/google/admin')
//     .get(webCtrl.web_google_redirect_get); 
// // PURPOSE: Redirect back to your site if successful or fails

// Password error route
router.route('/password-error').get(webCtrl.password_error );

router.route('/404').get(webCtrl.error_page);

router.route('/500').get(webCtrl.server_side_error);

module.exports = router;
