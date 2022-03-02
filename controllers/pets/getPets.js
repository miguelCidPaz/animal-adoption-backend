const petsManager = require("../../managers/petsManager");

async function getPets(req, res) {
  if (Object.keys(req.query).length === 0) {
    const pets = await petsManager.getAllPets();

    if (pets) res.status(200).json(pets);
    else res.status(404).end();
  } else {
    const pets = await petsManager.getByCriteria(req.query);

    if (pets) {
      res.status(200).json(pets);
    } else res.status(404).end();
  }
}
module.exports = getPets;
