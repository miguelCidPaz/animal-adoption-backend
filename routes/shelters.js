let router = require('express').Router();

router.get('/', require('../controllers/shelters/getAllShelters'));
router.post('/login', require('../controllers/shelters/login'));
router.post('/create', require('../controllers/shelters/createShelter'));

module.exports = router;