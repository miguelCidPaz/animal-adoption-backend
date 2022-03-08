const adoptionClient = require('./conection');
const Adopter = require("../models/adopter");

class AdoptersManager {
  static async createAdopter(body) {  
    const insertAdopterResponse = await adoptionClient.query(
      `INSERT INTO adopters (name, address, age, personalid) VALUES('${body.name}', '${body.address}', '${body.age}', '${body.personalId}')`
    );
    const insertedAdopter = await adoptionClient.query(`SELECT * FROM adopters WHERE personalId='${body.personalId}'`)
    console.log(insertedAdopter);
    return new Adopter(insertedAdopter.rows);
  }
}

module.exports = AdoptersManager;
