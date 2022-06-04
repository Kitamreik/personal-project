const express = require('express');
const passport = require('passport');
const data = require('../data/data');
const createData = require('../data/create-data');
const User = require('../models/user-model');
const Create = require('../models/create-model');

module.exports = {
    read_log_post: (request, response) => {
        const {firstAndLastName, Email, Phone, Synopsis} = request.body;
        // console.log(request.body);
        const create = new Create ({
            firstAndLastName: firstAndLastName,
            Email: Email,
            Phone: Phone,
            Synopsis: Synopsis
        });
        create.save();

        response.redirect('/admin/readlog');
    }
}