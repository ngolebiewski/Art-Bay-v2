const express = require('express');
const router = express.Router();

// /user routes
router.get('/user', (req, res) => {
  res.json({ message: 'Welcome to the user page' });
});

module.exports = router;