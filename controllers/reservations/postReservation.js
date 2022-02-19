const data = require('../../data.json');

function postReservation(req, res) {
    reservation = reservationManager.addReservation(req.params.body.reservation);  /*????*/
    adopter = adoptersManager.addAdopter(req.params.body.adopter);
    res.status(201).json();
}

module.exports = getMealById;