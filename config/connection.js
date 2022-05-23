const mongoose = require('mongoose');
const dotenv = require('dotenv');

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(!err) {
      console.log("You have successfully connected to the MongoDB server! Hooray!");  
    }
    else {
        console.log("ERROR- there is a connectivity issue with MongoDB. Please review.");
        console.log(err)
    }
});