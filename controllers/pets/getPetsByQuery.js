const petsManager = require("../../managers/petsManager");

async function getPetsByQuery(req, res) {
  const pets = await petsManager.getByCriteria(req.body.newConditions);
  if (pets) {
    res.status(200).json(pets);
  } else res.status(404).end();
}
module.exports = getPetsByQuery;
