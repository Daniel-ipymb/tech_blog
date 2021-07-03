const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/user', userRoutes);
router.use('/post', blogPostRoutes);

module.exports = router;
