const reservationManager = require("../../managers/resevationManager");
const adoptersManager = require("../../managers/adoptersManager");

async function postReservation(req, res) {
 const adopter = await adoptersManager.createAdopter(req.body.adopter);
 
 const reservation = await reservationManager.createReservation(req.body.reservation);
  console.log(adopter);
  //res.status(201).json(reservation);
  res.status(201).json(adopter).end();
}

module.exports = postReservation;
