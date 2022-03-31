let router = require('express').Router();

router.use('/pets', require('./pets'));
router.use('/reservations', require('./reservations'));
router.use('/shelters', require('./shelters'));

module.exports = router;