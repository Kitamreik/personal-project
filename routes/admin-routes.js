const express = require('express');
const adminController = require('../controllers/admin-controller');
const router = express.Router();

router.route('/')
// formerly '/admin'
    .get(adminController.admin)
    .post(adminController.admin);

/*
router.route('/login')
    .get(adminController.login)
    .post(adminController.login);
    // PURPOSE: To allow Users to log in and see the admin-console
*/

//CRUD
// Make sure to think about the footer form to readlog
router.route('/createlog')
    .get(adminController.create_log);
router.route('/readlog')
    .get(adminController.read_footer)
    // .get(adminController.all_create)
    .get(adminController.all_update)
    .get(adminController.all_remove);

    // Do not use .get(adminController.read_log);
    
// which log needs to be updated and deleted re: params
router.route('/updatelog')
    .get(adminController.update_log);
router.route('/deletelog')
    .get(adminController.remove_log);


module.exports = router;