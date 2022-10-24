// DO NOT TOUCH
const express = require('express');
const logController = require('../controllers/log-controller');
const router = express.Router();
router.route('/')
    .post(logController.read_outreach);
    

module.exports = router;