const express = require('express');
const passport = require('passport');
const data = require('../data/data');
const createData = require('../data/create-data');
const User = require('../models/user-model');
const Footer = require('../models/footer-model');
const Create = require('../models/old-create-model');
const Remove = require('../models/remove-model');
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
        const {firstAndLastNameRemove, emailRemove, phoneRemove, synopsisRemove, studentRemoveRecord} = request.body;
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
    read_log_post_update: (request, response) => {
        const {firstAndLastNameUpdate, emailUpdate, phoneUpdate, synopsisUpdate, studentUpdateRecord} = request.body;
        const update = new Update ({
            firstAndLastNameUpdate: firstAndLastNameUpdate,
            emailUpdate: emailUpdate,
            phoneUpdate: phoneUpdate,
            synopsisUpdate: synopsisUpdate,
            studentUpdateRecord: studentUpdateRecord
        });

        update.save();
        response.redirect('/admin/readlog');
    },
    // read_footer: (request, response) => {
    //     const {firstAndLastNameFooter, emailFooter, phoneFooter} = request.body;
    //     const readfooter = new Footer ({
    //         firstAndLastNameFooter: firstAndLastNameFooter,
    //         emailFooter: emailFooter,
    //         phoneFooter: phoneFooter
    //     });
        
    //     readfooter.save();
    //     response.redirect('/admin/readlog');
    // }
}