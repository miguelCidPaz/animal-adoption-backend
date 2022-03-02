const reservationManager = require("../../managers/resevationManager");
const adoptersManager = require("../../managers/adoptersManager");

async function postReservation(req, res) {
  // adopter = await adoptersManager.createAdopter(req.body.adopter);
 const reservation = await reservationManager.createReservation(req.body.reservation);
  
  res.status(201).json(reservation);
}

module.exports = postReservation;
