const petsManager = require("../../managers/petsManager")

async function getAllLockedPets(req, res) {
    const pets = await petsManager.getAllLockedPets();
    return pets.length > 0 ? res.status(200).json(pets) : res.status(404).json(pets)
}

module.exports = getAllLockedPets