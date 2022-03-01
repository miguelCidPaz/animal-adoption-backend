const petsManager = require("../../managers/petsManager");

async function getPets(req, res) {
  if (req.query == '') {
    const pets = await petsManager.getAllPets();
    
    res.status(200).json(pets);
   
  } else {
    const pets = await petsManager.getByCriteria(req.query);
   
    res.status(200).json(pets);
    
  }
}
module.exports = getPets;
