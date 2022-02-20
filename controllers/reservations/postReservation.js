const reservationManager = require("../../managers/resevationManager");
const adoptersManager = require("../../managers/adoptersManager");

function postReservation(req, res) {
  reservation = reservationManager.createReservation(req.body.reservation);

  /* no se si es solo req.body o????*/

  adopter = adoptersManager.createAdopter(req.body.adopter);
  res.status(201).json();
}

module.exports = postReservation;
