const {v4: uuid} = require('uuid');

module.exports = [
    {
        id: uuid(),
        firstAndLastName: "Test Coder",
        Email: "testkit@gmail.com",
        Phone: 5555555555,
        Synopsis: "This is a test."
    },
    {
        id: uuid(),
        firstAndLastName: "",
        Email: "",
        Phone: "",
        Synopsis: ""
    }
]