const petsManager = require("../../managers/petsManager");

function getPets(req, res) {
  pets = petsManager.getAllPets();
  res.status(200).json(pets);
}

module.exports = getPets;
