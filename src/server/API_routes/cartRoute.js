const express = require('express');
const router = express.Router();

// /cart routes
router.get('/cart', (req, res) => {
  res.json({ message: 'welcome to the cart' });
});

module.exports = router;