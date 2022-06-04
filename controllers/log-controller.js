const express = require('express');
const passport = require('passport');
const data = require('../data/data');
const createData = require('../data/create-data');
const User = require('../models/user-model');
const Create = require('../models/create-model');
const Delete = require('../models/remove-model');
const Update = require('../models/update-model');

module.exports = {
    read_log_post: (request, response) => {
        const {firstAndLastName, Email, Phone, Synopsis} = request.body;
        const create = new Create ({
            firstAndLastName: firstAndLastName,
            Email: Email,
            Phone: Phone,
            Synopsis: Synopsis
        });
        create.save();

        response.redirect('/admin/readlog');
    },
    read_log_post_remove: (request, response) => {
        const {firstAndLastName, emailRemove, phoneRemove, synopsisRemove, studentRemoveRecord} = request.body;
        const remove = new Remove ({
            firstAndLastNameRemove: firstAndLastNameRemove,
            emailRemove: emailRemove,
            phoneRemove: phoneRemove,
            synopsisRemove: synopsisRemove,
            studentRemoveRecord: studentRemoveRecord
        });

        remove.save();
        response.redirect('/admin/readlog');
    },
    // read_log_post_update: (request, response) => {}
}