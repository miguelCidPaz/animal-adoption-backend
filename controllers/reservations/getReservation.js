const reservationManager = require("../../managers/resevationManager");

async function getReservation(req, res) {
  const reservation = await reservationManager.getReservation(req.params.id);
  if (reservation) {
    res.status(200).json(reservation);
  } else res.status(404).end();
}

module.exports = getReservation;
