class Pet {
  id;
  size;
  gender;
  weightKg;
  rescuedAt;
  birthday;
  species;
  reservationDate;
  shelterId;
  name;
  images;

  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.shelterId = props.shelterId;
    this.size = props.size;
    this.gender = props.gender;
    this.weightKg = props.weightKg;
    this.rescuedAt = props.rescuedAt;
    this.birthday = props.birthday;
    this.species = props.species;
    this.reservationDate = props.reservationDate;
    this.images = props.images;
  }
}
module.exports = Pet;
