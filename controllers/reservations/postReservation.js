const reservationManager = require("../../managers/resevationManager");
const adoptersManager = require("../../managers/adoptersManager");

async function postReservation(req, res) {
    console.log(req.body, 'body');
 const adopter = await adoptersManager.createAdopter(req.body);
 console.log('controller');
 const reservation = await reservationManager.createReservation(req.body,req.params.id);  
 
 res.status(201).json({adopter:adopter, reservation:reservation}).end();
}

module.exports = postReservation;
