// DO NOT TOUCH
const express = require('express');
const adminRoutes = require('./admin-routes');
const siteRoutes = require('./site-routes');
const logRoutes = require('./log-routes');
const studentRoutes = require('./student-routes');
const router = express.Router();

router.use('/', siteRoutes);
router.use('/admin', adminRoutes);

// Experimental code for the form data
router.use('/logs', logRoutes);

// EXPERIMENTAL code for the student interest form
router.use('/students', studentRoutes);

module.exports = router;