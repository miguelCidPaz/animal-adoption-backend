class Pet {
  id;
  size;
  gender;
  weightKg;
  rescuedAt;
  birthday;
  species;
  reservationDate; 
  name;
  images;

  constructor(props) {
    this.id = props.id;
    this.name = props.name;    
    this.size = props.size;
    this.gender = props.gender;
    this.weightKg = props.weightkg;
    this.rescuedAt = props.rescuedat;
    this.birthday = props.birthday;
    this.species = props.species;
    this.reservationDate = props.reservationDate;
    this.images = props.images;
  }
}
module.exports = Pet;
