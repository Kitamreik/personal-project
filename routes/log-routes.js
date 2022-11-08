// DO NOT TOUCH
const express = require('express');
const logController = require('../controllers/log-controller');
const router = express.Router();
router.route('/')
    .get(logController.read_outreach)
    .post(logController.read_outreach)
    .delete(logController.read_outreach);
    

module.exports = router;