const adoptionClient = require("./conection");
const Adopter = require("../models/adopter");

class AdoptersManager {
  static async createAdopter(body) {
    try {
      const insertAdopterResponse = await adoptionClient.query(
        `INSERT INTO adopters (name, address, age, personalid) VALUES('${body.name}', '${body.address}', '${body.age}', '${body.personalID}')`
      );
    } catch (error) {
      throw (error);
    }

    const insertedAdopter = await adoptionClient.query(
      `SELECT * FROM adopters WHERE personalid='${body.personalID}'`
    );
    return new Adopter(insertedAdopter.rows[0]);
  }
}

module.exports = AdoptersManager;
