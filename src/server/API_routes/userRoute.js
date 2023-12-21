const express = require('express');
const router = express.Router();

// /user routes
router.get('/user', (req, res) => {
  res.json({ message: 'Get all users' });
});

module.exports = router;