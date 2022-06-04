const mongoose = require('mongoose');
const {Schema} = mongoose;
const updateSchema = new Schema ({
    firstAndLastNameUpdate: {},
    emailUpdate: {},
    phoneUpdate: {},
    synopsisUpdate: {},
    studentUpdateRecord: {}
});

const Update = mongoose.model('Update', updateSchema);
module.exports = Update;