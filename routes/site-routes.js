// DO NOT TOUCH - only when adding pages
const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site-controller');

router.route('/class-interest')
    // .get(siteController.error_page);
    .get(siteController.class_interest);

// add new routes here:
router.route('/capstone-projects')
    .get(siteController.capstone_projects);

router.route('/jan-23-photogallery')
    .get(siteController.jan_cohort_pics);

router.route('/early-access')
    .get(siteController.error_page);
    // .get(siteController.early_access);

router.route('/404')
    .get(siteController.error_page);

router.route('/500')
    .get(siteController.server_side_error);

router.route('/client-relations')
    .get(siteController.client_relations);

router.route('/grad-projects')
    .get(siteController.grad_projects);

router.route('/mentor-features')
    .get(siteController.mentor_features);

router.route('/holiday-feature')
    .get(siteController.holiday_features);

router.route('/new-year')
    .get(siteController.new_year)

// do NOT edit

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

router.route('/outreach-form')
    .get(siteController.outreach_form);

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
    .get(siteController.google_get);

router.route('/auth/google/admin')
    .get(siteController.google_redirect_get); 
// PURPOSE: Redirect back to your site if successful or fails
// NAME: tj-practitioner-directory ---> CYCLIC- Nov 2022
    
module.exports = router;




 


