// data
const studentData = require('../data/student-data');
// model
const Student = require('../models/student-model');

module.exports = {
    // show the entry that was created from the student model
    read_new_student: (request, response) => {
        const {firstName, lastName, dateEntry, semester, info, question} = request.body;
        const newStudent = new Student ({
            firstName: firstName,
            lastName: lastName,
            dateEntry: dateEntry,
            // semester: semester,
            info: info,
            question: question
        })

        newStudent.save();
        response.redirect('pages/student-log');
        // ensures the data is saved to the student log
    },

    // show all entries- ensures the data is saved to the student log can be seen
    show_all_students: (request, response) => {
        Student.find({}, (error, studentArray) => {
            if (error) {
                return error;
            } else {
                response.render('pages/student-log', {
                    studentArray: studentArray
                });
            };
        });
    },

    // register when a log is created from the form
    create_new_student: (request, response) => {
        const {firstName, lastName, dateEntry, semester, info, question} = request.body;
        const newStudent = new Student ({
            firstName: firstName,
            lastName: lastName,
            dateEntry: dateEntry,
            // semester: semester,
            info: info,
            question: question
        })

        newStudent.save();
        response.render('pages/form-submit') // yes- user experience
    },


    // delete a student
    delete_student: (request, response) => {
        const { _id } = request.params;
        Student.deleteOne({_id: _id}, error => {
          if(error) {
            return error;
          } else {
            response.redirect('/admin') // keep to admin to allow for seamless admin-side experience
  
  
            //a redirect to index,login works
            // there is a log of the delete as a redirect 
        // the entries are deleted
          }
        }); 
    },

    // show the detail of a student
    student_detail: (request, response) => {
        const {_id} = request.params;
        Student.findOne({_id: _id}, (error, foundStudent) => {
            if(error) {
            return error;
            } else {
            response.render('pages/student-update-form', {
                student: foundStudent
            });
            }
        })
    },

    // update a student
    student_update_put: (request, response) => {
        const { _id } = request.params;
        const {firstName, lastName, dateEntry, semester, info, question} = request.body;
        Student.findByIdAndUpdate(_id, {$set: {
            firstName: firstName,
            lastName: lastName,
            dateEntry: dateEntry,
            // semester: semester,
            info: info,
            question: question
          }}, {new: true}, error => {
            if(error) {
              return error;
            } else {
              // 
              response.render('pages/form-submit')
            }
          })    
    },
}
//reference log controller 
