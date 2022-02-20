class Shelter {
  #id;
  #name;
  #adress;

  constructor(props) {
    this.#id = props.id;
    this.#name = props.name;
    this.adress = props.adress;
  }
}
module.exports = Shelter;
