const adoptionClient = require('./conection');
const Adopter = require("../models/adopter");

class AdoptersManager {
  static async createAdopter(body) {
    const adopter = await adoptionClient.query(
      `INSERT INTO Adopters VALUES(${body.name}, ${body.address}, ${body.age}, ${body.personalId}, ${stateAdoptionId})`
    );
    return new Adopter(adopter);
  }
}

module.exports = AdoptersManager;
