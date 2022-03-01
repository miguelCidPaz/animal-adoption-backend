class Adopter {
  id;
  name;
  adress;
  age;
  personalId;
  stateAdoptionId;

  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.adress = props.adress;
    this.age = props.age;
    this.personalId = props.personalId;
    this.stateAdoptionId = props.stateAdoptionId;
  }
}

module.exports = Adopter;
