const express = require('express');
const serieController = require('../controllers/serieController');
const { requireAuth, checkUser } = require('../middleware/authMiddleware');

const router = express.Router();

router.get("/series/create", requireAuth, serieController.serie_create_get);
router.get('/series', requireAuth, serieController.serie_index);
router.get('/series/details', requireAuth, serieController.serie_details);
router.get('/series/form-test', requireAuth, serieController.serie_create_test);
router.get('/series/profile', requireAuth, serieController.serie_profile);

module.exports = router; 