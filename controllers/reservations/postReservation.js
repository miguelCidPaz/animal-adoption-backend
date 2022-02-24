const reservationManager = require("../../managers/resevationManager");
const adoptersManager = require("../../managers/adoptersManager");

function postReservation(req, res) {
  reservation = reservationManager.createReservation(req.body.reservation);
  adopter = adoptersManager.createAdopter(req.body.adopter);
  console.log(req.body);
  res.status(201).json();
}

module.exports = postReservation;
