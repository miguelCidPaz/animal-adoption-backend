const adoptionClient = require("./conection");
const Pet = require("../models/pet");

const databaseKeys = {
  dog: 1,
  cat: 2,
  male: 1,
  female: 2,
  small: 1,
  medium: 2,
  large: 3
}

function format(info) {
  let newInfo = [];
  info.map((pet) => {
    let newPet = { ...pet };
    if (newPet.images) {
      const urlArray = pet.images.split(',');
      newPet = { ...newPet, images: urlArray };
    }
    if (newPet.species) {
      (newPet.species === databaseKeys.dog) ? newPet = { ...newPet, species: 'Dog' } : newPet = { ...newPet, species: 'Cat' }
    }
    if (newPet.gender) {
      (newPet.gender === databaseKeys.male) ? newPet = { ...newPet, gender: 'Male' } : newPet = { ...newPet, gender: 'Female' }
    }
    if (newPet.size) {
      if (newPet.size === databaseKeys.small) {
        newPet = { ...newPet, size: 'Small' }
      } else if (newPet.size === databaseKeys.medium) {
        newPet = { ...newPet, size: 'Medium' }
      } else {
        newPet = { ...newPet, size: 'Large' }
      }
    }
    newInfo.push(newPet);
  })
  return newInfo
}

class PetsManager {
  static async getAllPets() {
    const pets = await adoptionClient.query(`SELECT * FROM Pets;`);
    const formattedInfo = format(pets.rows);    
    return formattedInfo.map((pet) => {
      return new Pet(pet);
    });
  }

  static async getById(id) {
    const pet = await adoptionClient.query(
      `SELECT * FROM Pets WHERE id = '${id}';`
    );
    const formattedInfo = format(pet.rows);
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
    const formattedInfo = format(pets.rows);
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
