// DO NOT TOUCH
const express = require('express');
const passport = require('passport');
const outreachData = require ('../data/outreach-data');
const User = require('../models/outreach-model');

module.exports = {
    read_outreach: (request, response) => {
        const {firstName, lastName, email, phoneNumber, reason} = request.body;
        const outreach = new User ({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            reason: reason 
        });
        outreach.save();

        response.redirect('/admin');
    },
}
