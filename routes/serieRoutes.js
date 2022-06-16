const express = require('express');
const serieController = require('../controllers/serieController');

const router = express.Router();

router.get("/series/create", serieController.serie_create_get);
router.get('/series', serieController.serie_index);
router.get('/series/details', serieController.serie_details);
router.get('/series/form-test', serieController.serie_create_test);

// Xiao nan heeft dit toegevoegd
router.get('/home', serieController.serie_home);
router.get('/series/profile', serieController.serie_profile);
router.get('/series/signin', serieController.serie_signin);
router.get('/series/signup', serieController.serie_signup);

module.exports = router; 