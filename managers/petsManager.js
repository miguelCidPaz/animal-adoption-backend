const adoptionClient = require('./conection')
class PetsManager {
  /*{name:pepe, dni:123} */
  /*name=pepe AND */
  /*dni=123 AND */
  getAllPets() {
    pets = adoptionClient.query(`SELECT * FROM Pets;`);
    console.log(pets)
    return pets.map((pet) => new Pet(pet));
  }

  getByCriteria(criteria = {}) {
    /* ejemplo criteria = {name:pepe, dni:123} */

    const stringifiedObj = Object.entries(criteria)
      /*Dividimos el objeto en una matriz de pequeñas matrices de parámetros => 
      [ ['name', 'pepe'], ['dni', 123] ]  */
      .map((x) => x.join("="))
      /*Convierte la [key, value] salida de la matriz Object.enteries al key=value formato
     [[name = 'pepe'], [dni = 123] ] */
      .join("AND");
    /* Y esto nos lo dejaría asi no? => ['name', 'pepe'] AND ['dni', 123] ] */

    pets = adoptionClient.query(
      `SELECT * FROM Adopters WHERE ${stringifiedObj};`
    );
    return pets.map((pet) => new Pet(pet));
  }

  getbyId(id) {
    pet = adoptionClient.query(`SELECT * FROM Pets WHERE id =${id};`);
    console.log(pet);
    //return pet.map((pet) => new Pet(pet))
  }
}
module.exports = PetsManager;
