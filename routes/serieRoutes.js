const express = require('express');
const serieController = require('../controllers/serieController');
const { requireAuth, checkUser } = require('../middleware/authMiddleware');

const router = express.Router();

router.get("/series/create", requireAuth, serieController.serie_create_get);
router.get('/series', requireAuth, serieController.serie_index);
router.get('/series/:id', requireAuth, serieController.serie_details);
router.post('/series', serieController.serie_create_post);


module.exports = router; 