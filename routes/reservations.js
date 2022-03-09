var router = require('express').Router();

router.post('/:id', require('../controllers/reservations/postReservation'));

module.exports = router;