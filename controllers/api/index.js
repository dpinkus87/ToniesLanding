const router = require('express').Router();

const userRoutes = require('./user-routes');
const que = require('./que');

router.use('/user', userRoutes);
router.use('/que.js', que);

module.exports = router;