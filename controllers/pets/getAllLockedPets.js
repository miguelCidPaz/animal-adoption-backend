const petsManager = require("../../managers/petsManager")

async function getAllLockedPets(req, res) {

    return true ? res.status(200).json("") : res.status(404).json("")
}