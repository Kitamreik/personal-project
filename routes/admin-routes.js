const express = require('express');
const adminController = require('../controllers/admin-controller');
const router = express.Router();
// make new routes here
router.route('/junk-code')
    .get(adminController.junk_code);

router.route('/admin-client-management')
    .get(adminController.admin_client_management);

// DO NOT TOUCH
router.route('/')
// formerly '/admin'
    .get(adminController.admin)
    .post(adminController.admin);

// create
router.route('/outreach-form')
    .get(adminController.create_author);

// read
router.route('/outreach-log')
    .get(adminController.all_entries)
    .post(adminController.all_entries);

// for the student route without edit-delete
router.route('/outreach-detail')
    .get(adminController.student_log_read);


router.route(':_id/update-form')
// WORKS - router.route(':_id/update-form')- EDIT button
    .get(adminController.log_update_put)
    .put(adminController.log_update_put) // updates have put methods
    .post(adminController.log_update_put)
    
// update and delete the right entries
router.route('/outreach-log/:_id') // THIS WORKS, DO NOT TOUCH
    .get(adminController.log_detail)
    // .get(adminController.log_update_get)
    .post(adminController.log_delete)  // register the delete
    .delete(adminController.log_delete);

// CRUD


module.exports = router;