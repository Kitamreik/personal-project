const express = require('express');
const adminRoutes = require('./admin-routes');
const siteRoutes = require('./site-routes');

const router = express.Router();

router.use('/', siteRoutes);
router.use('/admin', adminRoutes);

module.exports = router;