//const adoptionClient = require('./conection');
// class extends in connection
class ReservationManager {
  static async createReservation() {
    reservation = await adoptionClient.query(
      `INSERT INTO state_adoption VALUES(${idPets}, ${idAdopter}, ${adoptionStatus})` //id?
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
