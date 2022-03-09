const adoptionClient = require("./conection");
const Reservation = require("../models/reservation");
// class extends in connection

class ReservationManager {
  static async createReservation(body, petId) {
    var reservation = "";
    var adoptStatus = "";
    var isAvailable = true;
    try {
      adoptStatus = await adoptionClient.query(
        `SELECT adoptionStatus FROM state_adoption WHERE idpet = '${petId}'`
      );
      if (adoptStatus.rows[0].adoptionstatus === 1) {
        isAvailable = false;
      }
    } catch (error) {
      console.error(error);
    }
    // console.log(isAvailable);

    // console.log(insertedAdopter.rows[0].id);
    console.log(isAvailable);
    if (isAvailable) {
      console.log('se ejecuta este otro');
      const insertAdopterResponse = await adoptionClient.query(
        `SELECT * FROM adopters WHERE personalId='${body.personalId}'`
      );
      const idAdopter = insertAdopterResponse.rows[0].id;
      console.log(idAdopter, "ID ADOPTER");
      console.log(petId, "PET");
      reservation = await adoptionClient.query(
        `INSERT INTO state_adoption (idpet, idadopter, adoptionstatus)VALUES('${petId}', '${idAdopter}', 1)`
      );
      return new Reservation(reservation);
    } else return {"message":"Pet Not Available"};
  }
}

module.exports = ReservationManager;
