// DO NOT TOUCH
const {v4: uuid} = require('uuid');

let currentDate = new Date();

let outreachData = [{
    _id: uuid(),
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    reason: ""
}];

module.exports = outreachData;
