let router = require('express').Router();

router.post('/:id', require('../controllers/reservations/postReservation'));
router.get('/:id', require('../controllers/reservations/getReservation'));

module.exports = router;