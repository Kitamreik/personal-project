// DO NOT TOUCH
const {v4: uuid} = require('uuid');

// START outreach mod exports array
module.exports = [
    {
        _id: uuid(),
        firstName: "",
        lastName: "",
        dateEntry: "",
        semester: "",
        info: "",
        question: ""
    },
    // for the outreach detail page
    {
        _id: 001,
        firstName: "Test",
        lastName: "Student",
        dateEntry: "2023-06-12",
        semester: "Jan 2024",
        info: "This is a hard-coded entry to allow data to render",
        question: "How does this work you may ask?"
    },
];