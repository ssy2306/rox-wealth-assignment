const express = require('express');
const router = express.Router();

const RestaurantData = require('../controllers/restaurantData');

router.get('/data', RestaurantData);

module.exports = router;
