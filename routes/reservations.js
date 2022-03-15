let router = require('express').Router();

router.post('/:id', require('../controllers/reservations/postReservation'));
router.get('/', require('../controllers/reservations/getReservation'));

module.exports = router;