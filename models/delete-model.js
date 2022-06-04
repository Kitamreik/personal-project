const mongoose = require('mongoose');
const {Schema} = mongoose;
const deleteSchema = new Schema ({
    firstAndLastNameDelete: {},
    emailDelete: {},
    phoneDelete: {},
    synopsisDelete: {},
    studentDeleteRecord: {}
});

const Delete = mongoose.model('Delete', deleteSchema);
module.exports = Delete;