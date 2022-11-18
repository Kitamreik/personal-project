// DO NOT TOUCH
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
router.route('/outreach-log')
    .get(adminController.all_clients)
    .get(adminController.outreach_log);

router.route('/edit')
    .get(adminController.edit);

router.route('/:_id/edit')
    .put(adminController.update_outreach_get);

module.exports = router;