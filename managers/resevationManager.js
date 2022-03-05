const adoptionClient = require('./conection');
const Reservation = require("../models/reservation");
// class extends in connection

class ReservationManager {
  static async createReservation(body) {
    const reservation = await adoptionClient.query(
      `INSERT INTO state_adoption VALUES(${body.id},${body.idPet}, ${body.idAdopter}, ${body.adoptionStatus})`
    );
    return new Reservation(reservation);
  }
}

module.exports = ReservationManager;
