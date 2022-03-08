class Adopter {
  id;
  name;
  adress;
  age;
  personalId;

  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.address = props.address;
    this.age = props.age;
    this.personalId = props.personalId;
  }
}

module.exports = Adopter;
