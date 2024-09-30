const express = require('express');
const webController = require('../controllers/web-controller');
const router = express.Router();

// Middleware to check if user is authenticated
const isAuthenticated = (request, response, next) => {
    next();
};

// Middleware to redirect authenticated users
const redirectIfAuthenticated = (request, response, next) => {
    next();
};

router.route('/').get(webController.index);

// Render login page
router.route('/login').get(webController.login, redirectIfAuthenticated);

// Handle login form submission
router.route('/login').post(webController.login);

// Admin panel route
router.route('/panel').get(webController.panel, isAuthenticated);

// Password error route
router.route('/password-error').get(webController.password_error );

module.exports = router;