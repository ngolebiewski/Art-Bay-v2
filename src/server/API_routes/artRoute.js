const express = require('express');
const router = express.Router();

// /art routes
router.get('/art', (req, res) => {
  res.json({ message: 'welcome to the art page!' });
});

module.exports = router;