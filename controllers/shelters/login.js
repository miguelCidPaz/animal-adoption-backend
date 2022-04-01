const sheltersManager = require('../../managers/sheltersManager');

async function login(req, res) {
    const comprobate = await sheltersManager.login(req.body.data);
    comprobate ? res.status(200).json(true) : res.status(400).json(false);
}

module.exports = login