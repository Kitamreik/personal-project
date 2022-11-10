// DO NOT TOUCH
const express = require('express');
const logController = require('../controllers/log-controller');
const router = express.Router();
router.route('/')
    .get(logController.all_clients)
    .post(logController.post_outreach);

router.route('/:_id')
    .get(logController.client_detail)
    .put(logController.update_outreach)
    .delete(logController.client_delete);

module.exports = router;