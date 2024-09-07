const express = require('express');
const router = express.Router();
const postRoutes = require('./resources/posts/routes');
const userRoutes = require('./resources/user/routes');
const adsRoutes = require('./resources/Ads/routes');
router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/ads', adsRoutes);

module.exports = router;
