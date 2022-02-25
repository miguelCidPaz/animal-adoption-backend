const petsManager = require("../../managers/petsManager");

async function getPets(req, res) {
  const pets =  await petsManager.getAllPets();
  console.log(pets)
  res.status(200).json(pets);
}

module.exports = getPets;
