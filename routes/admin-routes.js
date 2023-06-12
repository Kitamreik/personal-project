const express = require('express');
const adminController = require('../controllers/admin-controller');
const router = express.Router();
// make new routes here
router.route('/junk-code')
    .get(adminController.junk_code);

router.route('/admin-student-management')
    .get(adminController.admin_student_management);

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

router.route('/course-register')
    .get(adminController.create_new_student);

// read
router.route('/outreach-log')
    .get(adminController.all_entries)
    .post(adminController.all_entries);

router.route('/student-log')
    .get(adminController.show_all_students)
    .post(adminController.show_all_students)

// for the student route without edit-delete
router.route('/outreach-detail')
    .get(adminController.student_log_read);

router.route('/student-detail')
    .get(adminController.read_new_student)


router.route(':_id/update-form')
// WORKS - router.route(':_id/update-form')- EDIT button
    .get(adminController.log_update_put)
    .put(adminController.log_update_put) // updates have put methods
    .post(adminController.log_update_put)

router.route(':_id/student-update-form')
    .get(adminController.student_update_put)
    .put(adminController.student_update_put) // updates have put methods
    .post(adminController.student_update_put)
    
// update and delete the right entries
router.route('/outreach-log/:_id') // THIS WORKS, DO NOT TOUCH
    .get(adminController.log_detail)
    // .get(adminController.log_update_get)
    .post(adminController.log_delete)  // register the delete
    .delete(adminController.log_delete);

router.route('/student-log/:_id')
    .get(adminController.student_detail)
    .post(adminController.delete_student)
    .delete(adminController.delete_student)

// CRUD


module.exports = router;