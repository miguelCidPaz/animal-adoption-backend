const adoptionClient = require("./conection");
const Adopter = require("../models/adopter");

class AdoptersManager {
  static async createAdopter(body) {
    try {
      const insertAdopterResponse = await adoptionClient.query(
        `INSERT INTO adopters (name, address, age, personalid) VALUES('${body.name}', '${body.address}', '${body.age}', '${body.personalId}')`
      );
      console.log('crea el adopter');
    } catch (error) {
      throw (error);
    }

    const insertedAdopter = await adoptionClient.query(
      `SELECT * FROM adopters WHERE personalId='${body.personalId}'`
    );
    console.log('tiene un nuevo adopter');
    return new Adopter(insertedAdopter.rows[0]);
  }
}

module.exports = AdoptersManager;
