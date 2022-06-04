const express = require('express');
const logController = require('../controllers/log-controller');
const router = express.Router();
router.route('/')
    .post(logController.read_log_post)
    // .post(logController.read_footer)
    .post(logController.read_log_post_remove)
    .post(logController.read_log_post_update);
    

module.exports = router;