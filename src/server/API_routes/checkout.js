const express = require('express');
const router = express.Router();

// /user routes
router.get('/checkout', (req, res) => {
  res.json({ message: 'welcome to checkout!' });
});

module.exports = router;