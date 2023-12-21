const express = require('express');
const router = express.Router();

// /cart routes
router.get('/', (req, res) => {
  res.json({ message: 'Get all cart items' });
});

module.exports = router;