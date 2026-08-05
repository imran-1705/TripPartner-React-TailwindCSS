const express = require('express');
const { getTrips, createContactMessage } = require('../controllers/travelController');
const router = express.Router();

router.get('/health', (_req, res) => {
  res.json({ status: 'ok', message: 'TripPartner API is running' });
});

router.get('/trips', getTrips);
router.post('/contact', createContactMessage);

module.exports = router;
