class Reservation {
  id;
  idPet;
  idAdopter;
  adoptionStatus;

  constructor(props) {
    this.id = props.id;
    this.idPet = props.idpet;
    this.idAdopter = props.idadopter;
    this.adoptionStatus = props.adoptionstatus;
  }
}
module.exports = Reservation;
