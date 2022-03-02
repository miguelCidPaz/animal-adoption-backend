const reservationManager = require("../../managers/resevationManager");
const adoptersManager = require("../../managers/adoptersManager");

async function postReservation(req, res) {
 const reservation = await reservationManager.createReservation(req.body.reservation);
 // adopter = await adoptersManager.createAdopter(req.body.adopter);
  
  res.status(201).json();
}

module.exports = postReservation;
