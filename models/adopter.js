
class Adopter {
  #id
  #name
  #adress
  #age
  #personalId //DNI
  #state_adoption_id


  constructor(props) {
    this.#id = props.id
    this.#name = props.name
    this.#adress = props.adress
    this.#age = props.age
    this.#personalId = props.personalId
    this.#state_adoption_id = props.state_adoption_id

  }
}

module.exports = Adopter;