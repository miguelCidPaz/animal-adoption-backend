let router = require('express').Router();

router.get('/', require('../controllers/pets/getPets'));
router.get('/:id', require('../controllers/pets/getPet'));
router.get('/getlockeds', require('../controllers/pets/getAllLockedPets'));
router.post('/filter', require('../controllers/pets/getPetsByQuery'));
router.post('/create-pet', require('../controllers/pets/insertPet'));


module.exports = router;