const petsManager = require("../../managers/petsManager");

async function getPetsByQuery(req, res) {
  const pets = await await petsManager.getByCriteria(req.query);
  res.status(200).json(pets);
}
module.exports = getPetsByQuery;
