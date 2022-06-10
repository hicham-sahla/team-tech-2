const express = require('express');
const serieController = require('../controllers/serieController');

const router = express.Router();


router.get("/series/create", serieController.serie_create_get);
router.get('/series', serieController.serie_index);
router.get('/series/details', serieController.serie_details);
router.get('/series/form-test', serieController.serie_create_test);



module.exports = router; 