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

    try {
      const allLockeds = await adoptionClient.query('SELECT * FROM bailouts')
      const allLockedIds = allLockeds.rows.filter(e => {
        if (e.approbe === 0) return e.idpet
      })
      const allPets = await adoptionClient.query(`SELECT * FROM pets`);
      const myPets = format(allPets.rows.filter(e => {
        if (!allLockedIds.includes(e.id)) return e
      }))

      return myPets
    } catch (e) {
      console.error(e)
      return []
    }

  }

  static async getById(id) {
    const pet = await adoptionClient.query(
      `SELECT * FROM pets WHERE id = '${id}';`
    );
    const formattedInfo = format(pet.rows);
    if (formattedInfo) {
      return new Pet(formattedInfo[0]);
    } else {
      return undefined;
    }
  }

  static async getByCriteria(criteria) {
    if (Array.isArray(criteria)) {
      //😡I collect all the pets😡
      const pets = await adoptionClient.query('SELECT * FROM pets');

      //I format them☠️☠️☠️
      const formattedInfo = format(pets.rows);

      //I divide the criteria to treat them one by one 😈😈😈
      const species = this.#getSpecies(criteria);
      const sizes = this.#getSizes(criteria);
      const weight = this.#getWeight(criteria);

      const response = [];
      for (let pet of formattedInfo) {
        //Returns a boolean depending on whether these specifications are met 😙😙😙
        const specieAndSize = species.includes(pet.species) && sizes.includes(pet.size)
        const andWeight = pet.weightkg >= weight[0] && pet.weightkg <= weight[1];
        if (specieAndSize && andWeight) response.push(pet)
      }
      return response
    } else {
      const firstLetter = criteria.name.charAt(0).toUpperCase();
      criteria.name = firstLetter + criteria.name.slice(1)
      const normalizeName = criteria.name
      const query = `SELECT * FROM pets WHERE name='${normalizeName}'`
      let pets = await adoptionClient.query(query)
      pets = format(pets.rows);
      return pets
    }
  }

  static async insertPet(AllInfo) {

    const info = AllInfo[0]
    const data = AllInfo[1]

    const query0 = 'SELECT * FROM pets'

    const query1 = `INSERT INTO pets(name, size, gender, weightkg, rescuedat, birthday, species, images, description)
    VALUES('${data.name}', '${data.size}', '${data.gender}', '${data.weightkg}', '${data.rescuedat}', '${data.birthday}', 
    '${data.species}', '${data.images}', '${data.description}')`

    try {
      const allPetsWithoutOne = await adoptionClient.query(query0);
      await adoptionClient.query(query1);
      const allPets = await adoptionClient.query(query0);
      const myPet = this.#discriminePets(allPetsWithoutOne.rows, allPets.rows)
      await adoptionClient.query(`INSERT INTO bailouts(idpet, idshelter, phone, email, appreciations, approbe)
      VALUES('${myPet.id}', '${info.nameShelter}', '${info.phone}', '${info.email}', '${info.observations}', '${1}')`)
      return true
    } catch (e) {
      console.error(e)
      return false
    }
  }

  //Call all pets locked
  static async getAllLockedPets() {

    try {
      const allPetsLocked = await adoptionClient.query('SELECT * FROM bailouts');
      const allLockedIds = allPetsLocked.rows.filter(e => {
        if (e.approbe === 0) {
          return e.idpet
        }
      })
      const allPets = await adoptionClient.query('SELECT * FROM pets')
      const myPets = allPets.rows.filter(e => {
        if (allLockedIds.includes(e.id)) return e
      })
      return myPets
    } catch (e) {
      console.error(e)
      return []
    }

  }

  static #getSpecies(criteria) {
    const selectedSpecies = [];
    for (let condition of criteria) {
      if (condition[0] === 'Dog' || condition[0] === 'Cat') selectedSpecies.push(condition[0])
    }
    return selectedSpecies
  }

  static #getSizes(criteria) {
    const selectedSizes = [];
    for (let condition of criteria) {
      if (condition[0] === 'Small' || condition[0] === 'Medium' || condition[0] === 'Large') selectedSizes.push(condition[0])
    }
    return selectedSizes
  }

  static #getWeight(criteria) {
    let selectedWeight = []
    for (let condition of criteria) {
      if (Array.isArray(condition[1])) {
        selectedWeight = condition[1]
      }
    }
    return selectedWeight
  }

  static #discriminePets(arr1, arr2) {
    let result = {};
    for (let finalPet of arr2) {
      if (!arr1.includes(finalPet)) {
        result = finalPet
        break;
      }
    }
    return result
  }
}

module.exports = PetsManager;
