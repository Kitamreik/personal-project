// DO NOT TOUCH
const express = require('express');
const studentController = require('../controllers/student-controller');
const router = express.Router();

// we keep the / because the form can log the data
router.route('/')
    .get(studentController.show_all_students)
    .get(studentController.read_new_student)
    .post(studentController.create_new_student);

  
router.route('/:_id')
   // update
   .get(studentController.student_update_put)
   .put(studentController.student_update_put)// updates have put methods
    // detail
    .get(studentController.student_detail)
    // delete
    .delete(studentController.delete_student);
    
module.exports = router;