const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controller');


router.route('/')
// formerly '/admin'
    .get(adminController.admin)
    .post(adminController.admin);

router.route('/login')
    .get(adminController.login)
    .post(adminController.login);
    // PURPOSE: To allow Users to log in and see the admin-console

//CRUD

router.route('/createlog')
    .get(adminController.create_log)
    .post(adminController.create_log);
router.route('/readlog')
    .get(adminController.read_log)
    .post(adminController.read_log);
router.route('/updatelog')
    .get(adminController.update_log)
    .post(adminController.update_log);
router.route('/deletelog')
    .get(adminController.delete_log)
    .post(adminController.delete_log);


module.exports = router;