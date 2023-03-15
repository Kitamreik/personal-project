// DO NOT TOUCH
const express = require('express');
const logController = require('../controllers/log-controller');
const router = express.Router();

// outreach log
// outreach form

// we keep the / because the form can log the data
router.route('/')
    .get(logController.all_entries)
    .get(logController.read_outreach)
    .post(logController.create_author_log);

  
router.route('/:_id')
    // update
    .put(logController.log_update_put)
    // detail
    .get(logController.log_detail)
    // delete
    .delete(logController.log_delete);


module.exports = router;