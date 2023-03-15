// DO NOT TOUCH
const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// removal re Mongoose timeout: https://stackoverflow.com/questions/65408618/mongooseerror-operation-users-findone-buffering-timed-out-after-10000ms
mongoose.connect(process.env.DB_URL, (err) => {
    if(!err) {
      console.log("You have successfully connected to the MongoDB server! Hooray!");  
    }
    else {
        console.log("ERROR- there is a connectivity issue with MongoDB. Please review.");
        console.log("Server side errors occur when a failure to render a page falls on the server. A large spike in 500 or 503 errors could indicate the inability for the site's web hosting and server to manage the requirements of the site, resulting in downtime for visitors.");
        console.log(err)
    }
});