const mongoose = require('mongoose');
const {Schema} = mongoose;
const removeSchema = new Schema ({
    firstAndLastNameRemove: {},
    emailRemove: {},
    phoneRemove: {},
    synopsisRemove: {},
    studentRemoveRecord: {}
});

const Remove = mongoose.model('Remove', removeSchema);
module.exports = Remove;