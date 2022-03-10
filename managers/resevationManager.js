const adoptionClient = require("./conection");
const Reservation = require("../models/reservation");

const databaseKeys = {
  reserved: 1,
};

function format(info) {
  let newInfo = [];
  if (info) {
    info.map((reservation) => {
      let newReservation = { ...reservation };
      if (newReservation.adoptionstatus) {
        newReservation.adoptionstatus === databaseKeys.reserved
          ? (newReservation = { ...newReservation, adoptionstatus: "reserved" })
          : (newReservation = { ...newReservation, adoptionstatus: "available" });
      }
      newInfo.push(newReservation);
    });
    return newInfo;
  }
}

class ReservationManager {
  static async createReservation(body, petId) {
    let isPetAvailable = true;

    try {
      const petStatusQuery = await adoptionClient.query(
        `SELECT adoptionStatus FROM state_adoption WHERE idpet = '${petId}'`
      );
      if (petStatusQuery.rows[0].adoptionstatus === 1) {
        isPetAvailable = false;
      }
    } catch (error) {
      throw (getReservation, error);
    }

    if (isPetAvailable) {
      const insertAdopterResponse = await adoptionClient.query(
        `SELECT * FROM adopters WHERE personalId='${body.personalId}'`
      );
      const idAdopter = insertAdopterResponse.rows[0].id;
      const reservation = await adoptionClient.query(
        `INSERT INTO state_adoption (idpet, idadopter, adoptionstatus)VALUES('${petId}', '${idAdopter}', 1)`
      );
      return new Reservation(reservation);
    } else return { message: "Pet Not Available" };
  }

  static async getReservation() {
    let getReservation;
    try {
      getReservation = await adoptionClient.query(
        `SELECT * FROM state_adoption`
      );
      if (getReservation.rows[0] === undefined) {
        console.log("funciona");
        return undefined;
      }      
      const formattedInfo = format(getReservation.rows);
     return formattedInfo.map((info => {return new Reservation(info)}))
      
    } catch (error) {
      throw(error);
    }  
  }  
}

module.exports = ReservationManager;
