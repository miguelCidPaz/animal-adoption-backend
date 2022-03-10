const adoptionClient = require("./conection");
const Adopter = require("../models/adopter");

class AdoptersManager {
  static async createAdopter(body) {
    try {
      const insertAdopterResponse = await adoptionClient.query(
        `INSERT INTO adopters (name, address, age, personalid) VALUES('${body.name}', '${body.address}', '${body.age}', '${body.personalId}')`
      );
    } catch (error) {
      throw (insertAdopterResponse, error);
    }

    const insertedAdopter = await adoptionClient.query(
      `SELECT * FROM adopters WHERE personalId='${body.personalId}'`
    );

    return new Adopter(insertedAdopter.rows);
  }
}

module.exports = AdoptersManager;
