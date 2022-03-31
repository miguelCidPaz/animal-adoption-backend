const sheltersManager = require("../../managers/sheltersManager");

async function getAllShelters(req, res) {
    const shelters = await sheltersManager.getAllShelters();
    shelters.length > 0 ? res.status(200).json(shelters) : res.status(404).json([])
}

module.exports = getAllShelters;