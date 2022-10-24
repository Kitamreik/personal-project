// DO NOT TOUCH
const express = require('express');
const adminController = require('../controllers/admin-controller');
const router = express.Router();

router.route('/')
// formerly '/admin'
    .get(adminController.admin)
    .post(adminController.admin);

// CRUD
router.route('/outreach-log')
    .get(adminController.outreach_log)
    .post(adminController.outreach_log);
// outreach_log

module.exports = router;