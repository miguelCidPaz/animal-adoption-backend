const adoptionClient = require('./conection');
const Reservation = require("../models/reservation");
// class extends in connection
class ReservationManager {
  static async createReservation(body) {
    const reservation = await adoptionClient.query(
      `INSERT INTO state_adoption VALUES(${body.id},${body.idPet}, ${body.idAdopter}, ${body.adoptionStatus})` //id?
    );
    return new Reservation(reservation);
  }

 
  /* 
  getByCriteria(criteria = {}) {
    adopters = adoptionClient.query(
      `SELECT * FROM Adopters WHERE ${myCriteria};`
    );
    return adopters.map((adopter) => new Adopter(adopter));
  }

  getbyId(id) {
    adopter = fjsdñfls;
    return new Adopter(adopter);
  } */
}

module.exports = ReservationManager;
