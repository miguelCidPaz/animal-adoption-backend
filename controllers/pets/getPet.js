
const petsManager = require("../../managers/petsManager");

async function getPet(req, res) {
  
  const pet = await petsManager.getById(req.params.id);    
    res.status(200).json(pet);
}

module.exports = getPet;