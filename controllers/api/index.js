const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoute = require('./commentRoute')


router.use('/post', postRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoute);

module.exports = router;
