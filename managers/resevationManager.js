class ReservationManager {
  createReservation() {
    reservation = adoptionClient.query(
      `INSERT INTO state_adoption VALUES(id, idPets, idAdopter, adoptionStatus)`
    );
    new reservation(reservation);
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
