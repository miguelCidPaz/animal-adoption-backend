let router = require('express').Router();

router.get('/', require('../controllers/pets/getPets'));
router.get('/:id', require('../controllers/pets/getPet'));
router.get('/getlockeds/all', require('../controllers/pets/getAllLockedPets'));
router.put('/unlock-pet/:id', require('../controllers/pets/unlockPet'));
router.post('/delete/:id', require('../controllers/pets/deletePet'));
router.post('/filter', require('../controllers/pets/getPetsByQuery'));
router.post('/create-pet', require('../controllers/pets/insertPet'));


module.exports = router;