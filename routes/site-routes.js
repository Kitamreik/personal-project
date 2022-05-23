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
    .get(siteController.map);

router.route('/photogallery')
    .get(siteController.photogallery);

router.route('/tj-quiz')
    .get(siteController.tj_quiz);

router.route('/tj-answers')
    .get(siteController.tj_answers); 

    // works in siteCtrl, not adminCtrl --> moved successfully
/*
router.route('/createlog')
    .get(siteController.create_log);

router.route('/deletelog')
    .get(siteController.delete_log);

router.route('/updatelog')
    .get(siteController.update_log);
*/

    // works in siteCtrl, not adminCtrl --> moved successfully

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

router.route('/auth/google/index')
    .get(siteController.index_redirect); 
// PURPOSE: Redirect back to your site if successful or fails
// NAME: tj-practitioner-directory ---> heroku
    

module.exports = router;




 


