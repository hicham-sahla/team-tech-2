const express = require('express');
const serieController = require('../controllers/serieController');

const router = express.Router();


router.get("/series/create", serieController.serie_create_get);
router.get('/series/details', serieController.serie_details);
router.get('/series/form-test', serieController.serie_create_test);
router.post('/series', serieController.serie_create_post);


module.exports = router; 