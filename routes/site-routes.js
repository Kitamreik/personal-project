const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site-controller');

router.route('/')
    .get(siteController.index)
    .post(siteController.index);
// confirmation page

router.route('/videogallery')
    .get(siteController.about);

router.route('/contactus')
    .get(siteController.contact_us);

router.route('/map')
    .get(siteController.term_projects);

router.route('/photogallery')
    .get(siteController.photogallery);

router.route('/juneteenth-showcase')
    .get(siteController.june_showcase);

router.route('/tj-quiz')
    .get(siteController.tj_quiz);

router.route('/tj-answers')
    .get(siteController.tj_answers); 

router.route('/login')
    .get(siteController.login)
    .post(siteController.login);
    // PURPOSE: To allow Users to log in and see the admin-console

router.route('/logout')
// PURPOSE: Logs the user out if signed in
    .get(siteController.logout);   

router.route('/register')
// PURPOSE: To see a register for and to create a new User
    .get(siteController.register_get)
    .post(siteController.register_post);

router.route('/auth/google')
// PURPOSE: initiates Google authentication 
    .get(siteController.auth_google);

router.route('/auth/google/admin')
    .get(siteController.index_redirect); 
// PURPOSE: Redirect back to your site if successful or fails
// NAME: tj-practitioner-directory ---> heroku
    

module.exports = router;




 


