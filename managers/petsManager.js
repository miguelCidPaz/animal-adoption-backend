const adoptionClient = require("./conection");
const Pet = require("../models/pet");

function createImagesArray(info) {
  const newInfo = info.map((pet) => {
    if (pet.images) {
      const urlArray = pet.images.split(',');
      const newPet = { ...pet, images: urlArray };
      return newPet
    } else {
      return pet
    }
  })
  return newInfo
}

class PetsManager {
  static async getAllPets() {
    const pets = await adoptionClient.query(`SELECT * FROM Pets;`);
    const formattedInfo = createImagesArray(pets.rows);
    return formattedInfo.map((pet) => {
      return new Pet(pet);
    });
  }

  static async getById(id) {
    const pet = await adoptionClient.query(
      `SELECT * FROM Pets WHERE id = '${id}';`
    );
    const formattedInfo = createImagesArray(pet.rows);
    if (formattedInfo) {
      return new Pet(formattedInfo[0]);
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
    const formattedInfo = createImagesArray(pets.rows);
    if (formattedInfo) {
      return formattedInfo.map((petData) => {
        return new Pet(petData);
      });
    } else {
      return undefined;
    }
  }
}

module.exports = PetsManager;
