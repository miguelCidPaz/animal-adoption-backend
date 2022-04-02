const petsManager = require("../../managers/petsManager");

async function unlockPet(req, res) {
    const comprobate = await petsManager.unlockPet(req.params.id);
    return comprobate ? res.status(200).json(true) : res.status(400).json(false)
}

module.exports = unlockPet