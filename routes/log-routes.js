const express = require('express');
const logController = require('../controllers/log-controller');
const router = express.Router();
router.route('/')
    .post(logController.read_log_post);

module.exports = router;