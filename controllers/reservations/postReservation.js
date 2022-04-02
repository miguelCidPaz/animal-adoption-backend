const reservationManager = require("../../managers/resevationManager");
const adoptersManager = require("../../managers/adoptersManager");

async function postReservation(req, res) {
    const adopter = await adoptersManager.createAdopter(req.body);
    const reservation = await reservationManager.createReservation(req.body, req.params.id);

    res.status(201).json({ adopter: adopter, reservation: reservation }).end();
}

module.exports = postReservation;
