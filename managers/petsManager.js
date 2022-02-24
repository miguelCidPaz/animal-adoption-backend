const adoptionClient = require('./conection')
class PetsManager {
  /*{name:pepe, dni:123} */
  /*name=pepe AND */
  /*dni=123 AND */
  static async getAllPets() {
    pets = await adoptionClient.query(`SELECT * FROM Pets;`);
    return pets.map((pet) => new Pet(pet));
  }

  static async getbyId(id) {
    pet = await adoptionClient.query(`SELECT * FROM Pets WHERE id =${id};`);
    console.log(pet);
    return pet.map((pet) => new Pet(pet)) // Esto nos crea una copia o nos busca el del id ¿?¿?¿?¿ => JOSEMI !!
  }

  static getByCriteria(criteria = {}) { // varios filtros
    /* ejemplo criteria = {name:pepe, dni:123} */

    const stringifiedObj = Object.entries(criteria).map((x) => x.join("=")).join("AND");
    console.log(stringifiedObj);
      /*Dividimos el objeto en una matriz de pequeñas matrices de parámetros => 
      [ ['name', 'pepe'], ['dni', 123] ]  */
  
      /*Convierte la [key, value] salida de la matriz Object.enteries al key=value formato
     [[name = 'pepe'], [dni = 123] ] */
      
    /* Y esto nos lo dejaría asi no? => ['name'='pepe'] AND ['dni', 123] ] */

    pets = adoptionClient.query(
      `SELECT * FROM Adopters WHERE ${stringifiedObj};`
    );
    return pets.map((pet) => new Pet(pet));
  }
}
module.exports = PetsManager;
