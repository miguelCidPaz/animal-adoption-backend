const adoptionClient = require("./conection");
const Pet = require("../models/pet");

class PetsManager {
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

  static async getByCriteria(criteria = {}) {
    let sql = "";    
    const lastEntry = Object.entries(criteria).length - 1;

    Object.entries(criteria).forEach(([key, value], index) => {
      let operator = "=";
      if (key.includes(".")) {
        let symbol = key.slice(key.indexOf(".") + 1, key.length);
        operator = symbol == "gt" ? ">=" : "<=";
        key = key.slice(0, key.indexOf("."));
      }
      if (lastEntry > index) {
        sql += `${key} ${operator} '${value}' AND `;
      } else {
        sql += `${key} ${operator} '${value}' `;
      }
    });

    const pets = await adoptionClient.query(`SELECT * FROM Pets WHERE ${sql}`);
    const info = pets.rows;

    if (info) {
      return info.map((petData) => {
        return new Pet(petData);
      });
    } else {
      return undefined;
    }
  }
}

module.exports = PetsManager;
