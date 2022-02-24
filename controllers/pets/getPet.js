const petsManager = require('../../managers/petsManager');

function getPet(req, res) {
    //console.log(data.meals)
    pet = petsManager.getById(req.params.id);    
    res.status(200).json(pet);
}

module.exports = getPet;