const sheltersManager = require("../../managers/sheltersManager");

async function createShelter(req, res) {
    const comprobate = await sheltersManager.createShelter(req.body.data);
    comprobate ? res.status(200).json() : res.status(400).json()
}

module.exports = createShelter;