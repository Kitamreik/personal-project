// DO NOT TOUCH
const {v4: uuid} = require('uuid');

// START outreach mod exports array
module.exports = [
    {
        _id: uuid(),
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        reason: ""
    },
    {
        _id: uuid(),
        firstName: "Test",
        lastName: "Database Log",
        email: "kit.tjclasses@gmail.com",
        phoneNumber: "5555555555",
        reason: "This is a fail-safe, hard coded entry to allow the database to capture the data here :]"
    },
    // for the outreach detail page
    {
        _id: "001",
        firstName: "Test",
        lastName: "Database Log B",
        email: "kit.tjclasses@gmail.com",
        phoneNumber: "5555555555",
        reason: "This is a fail-safe, hard coded entry to allow the database to capture the data here through the outreach data :D"
    },
];

// let currentDate = new Date(); 

// CB
/*
let date = new Date();

module.exports = {
  userName: 'CodeSquader',
  year: date.getFullYear(),
  signedIn: true
}
*/