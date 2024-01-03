const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const prisma = require("../client");
const router = express.Router();

router.post('/', async (req, res,next) => {
    try {
      const { username, password } = req.body;
      const user = await prisma.user.findUnique({
        where: {
            username,
        }
    });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
  }
        
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);
        res.json({ token });
      } 
    
     catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  module.exports = router;