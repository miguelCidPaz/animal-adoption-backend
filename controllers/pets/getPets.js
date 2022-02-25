const petsManager = require("../../managers/petsManager");

async function getPets(req, res) {
  const pets =  await (await petsManager.getAllPets());     
  res.status(200).json(pets);
}

module.exports = getPets;
