var router = require('express').Router();

router.use('/pets', require('./pets'));
router.use('/reservations', require('./reservations'));

module.exports = router;