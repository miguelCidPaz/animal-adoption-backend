var router = require('express').Router();

router.post('/', require('../controllers/reservations/postReservation'));

module.exports = router;