const petsManager = require('../../managers/petsManager');

async function insertPet(req, res) {
    const isWork = await petsManager.insertPet(req.body.newPet)
    isWork ? res.status(200).json(true) : res.status(400).json(false)
}

module.exports = insertPet