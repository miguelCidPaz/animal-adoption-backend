const petsManager = require("../../managers/petsManager");

async function deletePet(req, res) {
    const comprobate = petsManager.deletePet(req.params.id);
    return comprobate ? res.status(200).json(true) : res.status(400).json(false)
}

module.exports = deletePet