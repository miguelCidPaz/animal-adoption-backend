const adoptionClient = require("./conection");
const Pet = require("../models/pet");
class PetsManager {
  /*{name:pepe, dni:123} */
  /*name=pepe AND */
  /*dni=123 AND */
  static async getAllPets() {
    const pets = await adoptionClient.query(`SELECT * FROM Pets;`);
    const info = pets.rows;
    return info.map((pet) => {
      return new Pet(pet);
    });
  }

  static async getById(id) {
    const pet = await adoptionClient.query(
      `SELECT * FROM Pets WHERE id = ${id};`
    );
    const info = pet.rows[0];
    if (info) {
      return new Pet(info);
    } else {
      return undefined;
    }
  }

  // static async getByCriteria(criteria = {}) {
  //   // varios filtros
  //   /* ejemplo criteria = {name:pepe, dni:123} */
  //   console.log(criteria, "Criteria primero");
  //   const stringifiedObj = Object.entries(criteria).map((x) => x.join("=")).join("AND");
  //   console.log(stringifiedObj, "Criteria stringified");
  //   /*Dividimos el objeto en una matriz de pequeñas matrices de parámetros => 
  //     [ ['name', 'pepe'], ['dni', 123] ]  */

  //   /*Convierte la [key, value] salida de la matriz Object.enteries al key=value formato
  //    [[name = 'pepe'], [dni = 123] ] */

  //   /* Y esto nos lo dejaría asi no? => ['name'='pepe'] AND ['dni', 123] ] */

  //   sql = ''
  //   valuesCriteria = []
  //   criteria.foreach((key, value) => {
  //      sql += `${key} = $${index}::text AND `
  //       valuesCriteria.push(value)
  //   })

  //   const pets = await adoptionClient.query(
  //     `SELECT * FROM Pets WHERE ${sql};`,
  //     ...valuesCriteria
  //   );
  //   console.log(pets, 'PETS');
  //   //Por qué es necesario hacer un new Pet() para un get???
  //   return pets.rows;
  // }
}
module.exports = PetsManager;
