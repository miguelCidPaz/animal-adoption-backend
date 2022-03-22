let router = require('express').Router();

router.get('/', require('../controllers/pets/getPets'));
router.get('/:id', require('../controllers/pets/getPet'));
router.post('/filter', require('../controllers/pets/getPetsByQuery'));

module.exports = router;