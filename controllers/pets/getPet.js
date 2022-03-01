const petsManager = require("../../managers/petsManager");

async function getPet(req, res) {
  const pet = await petsManager.getById(req.params.id);
  
  if (pet) {
    res.status(200).json(pet);
  } else res.status(404).end();
}

module.exports = getPet;
