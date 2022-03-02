class Reservation {
  id;
  idPet;
  idAdopter;
  adoptionStatus;

  constructor(props) {
    this.id = props.id;
    this.idPet = props.idPet;
    this.idAdopter = props.idAdopter;
    this.adoptionStatus = props.adoptionStatus;
  }
}
module.exports = Reservation;
