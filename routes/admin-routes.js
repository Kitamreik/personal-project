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

// disabled because it doesn't work
// router.route('/outreach-detail')
//     .get(adminController.log_detail);


// router.route('/update-form')
//     .put(adminController.log_update_put)
    
// update
router.route('/:_id') // original
    .get(adminController.log_detail)
    // .get(adminController.log_update_get)
    .put(adminController.log_update_put) // updates have put methods
    .delete(adminController.log_delete);

// CRUD


module.exports = router;