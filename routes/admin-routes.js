const express = require('express');
const adminController = require('../controllers/admin-controller');
const router = express.Router();
// make new routes here
router.route('/junk-code')
    .get(adminController.junk_code);

// DO NOT TOUCH
router.route('/')
// formerly '/admin'
    .get(adminController.admin)
    .post(adminController.admin);

// CRUD
<<<<<<< HEAD
router.route('/outreach-log')
    .get(adminController.all_clients)
    .get(adminController.outreach_log);

router.route('/edit')
    .get(adminController.edit);

router.route('/:_id/edit')
    .put(adminController.update_outreach_get);
=======
// create
router.route('/outreach-form')
    .get(adminController.create_author);

// read
router.route('/admin/outreach-log')
    .get(adminController.outreach_log)
    .post(adminController.outreach_log);

// update
router.route('/:_id/update-form')
    .get(adminController.author_update_get);
>>>>>>> version-2

module.exports = router;