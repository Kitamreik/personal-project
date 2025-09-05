// DO NOT TOUCH - only when adding pages
const express = require('express');
const router = express.Router();
const siteCtrl = require('../controllers/site-controller');

//Add new routes here:
//-----WEBMASTER (hidden routes without prefixes)-----

router.route('/frequently-asked-questions')
    .get(siteCtrl.questions)

router.route('/update-form')
    .get(siteCtrl.update)
    // .put(siteCtrl.update)
    // .post(siteCtrl.update)

router.route('/form-submit')
    .get(siteCtrl.form_confirmation);

router.route('/class-interest')
    //.get(siteCtrl.error_page);
    .get(siteCtrl.class_interest);


// ----------INDEX------------
router.route('/')
    .get(siteCtrl.index)
    .post(siteCtrl.index);
// confirmation page

router.route('/index/course-register')
    .get(siteCtrl.class_reg)

//-----CLIENT RELATIONS/OUTREACH-----
router.route('/index/client-relations')
    .get(siteCtrl.client_relations);

router.route('/index/contactus')
    .get(siteCtrl.contact_us);

router.route('/index/outreach-form')
    .get(siteCtrl.outreach_form);

router.route('/index/dev-updates')
    .get(siteCtrl.dev_updates)

// ----------DEV UPDATES------------

router.route('/dev-updates/mentor-features')
    .get(siteCtrl.mentor_features);

router.route('/dev-updates/intro-with-kit')
    .get(siteCtrl.about);

//-------STUDENTS---------
router.route('/index/student-directory')
    .get(siteCtrl.student_directory)

//-------CURRENT STUDENT DIRECTORIES------
router.route('/student-directory/jan-23-photogallery')
    .get(siteCtrl.jan_cohort_pics);

router.route('/student-directory/map')
    .get(siteCtrl.map);

router.route('/student-directory/pilot-cohort')
    .get(siteCtrl.photogallery);

//------PROJECTS----------
router.route('/index/project-directory')
    .get(siteCtrl.project_directory)

//------RESEARCH DATABASE--------
router.route('/project-directory/research')
    .get(siteCtrl.research)

//-------CURRENT PROJECT DIRECTORIES------
router.route('/project-directory/intermediate-projects')
    .get(siteCtrl.intermediate_projects)

router.route('/project-directory/capstone-projects')
    .get(siteCtrl.capstone_projects);

router.route('/project-directory/grad-projects')
    .get(siteCtrl.grad_projects);

// ----------AUTH------------
router.route('/login')
    .get(siteCtrl.login)
    .post(siteCtrl.login);
    // PURPOSE: To allow Users to log in and see the admin-console

router.route('/logout')
// PURPOSE: Logs the user out if signed in
    .get(siteCtrl.logout);   

router.route('/register')
// PURPOSE: To see a register for and to create a new User
    .get(siteCtrl.register_get)
    .post(siteCtrl.register_post);

router.route('/auth/google')
// PURPOSE: initiates Google authentication 
    .get(siteCtrl.google_get);

router.route('/auth/google/admin')
    .get(siteCtrl.google_redirect_get); 
// PURPOSE: Redirect back to your site if successful or fails

//Deprecated Routes 
/*

router.route('/tj-quiz')
    .get(siteCtrl.error_page);    
// .get(siteCtrl.tj_quiz);

router.route('/tj-answers')
    .get(siteCtrl.error_page);    
// .get(siteCtrl.tj_answers); 


router.route('/early-access')
    .get(siteCtrl.error_page);
    // .get(siteCtrl.early_access);

router.route('/new-year')
    .get(siteCtrl.new_year)

router.route('/holiday-feature')
    .get(siteCtrl.holiday_features);

router.route('/yesi')
    .get(siteCtrl.june_showcase);
*/
    
module.exports = router;
