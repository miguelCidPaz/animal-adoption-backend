const adoptionClient = require('./conection');
const Pet = require('../models/pet')
class PetsManager {
  /*{name:pepe, dni:123} */
  /*name=pepe AND */
  /*dni=123 AND */
  static async getAllPets() {
    const pets = await adoptionClient.query(`SELECT * FROM Pets;`)
    //Por qué es necesario hacer un new Pet() para un get???
    // const info = pets.rows
    // return info.map(
    //   (pet) => new Pet(pet));
    return pets.rows
  }

  static async getById(id) {
  const pet = await adoptionClient.query(`SELECT * FROM Pets WHERE id =${id};`)  
    
      return pet.rows    
     // Esto nos crea una copia o nos busca el del id ¿?¿?¿?¿ => JOSEMI !!
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

    const pets = adoptionClient.query(
      `SELECT * FROM Adopters WHERE ${stringifiedObj};`
    );
    //Por qué es necesario hacer un new Pet() para un get???
    return pets.map((pet) => new Pet(pet));
  }
}
module.exports = PetsManager;
