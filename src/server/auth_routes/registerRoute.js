const bcrypt = require('bcrypt');
const express = require('express');
const { PrismaClient } = require("@prisma/client");

const router = express.Router();
const prisma = new PrismaClient()

router.post('auth/register', async (req, res) => {
    try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = { id: users.length + 1, username, password: hashedPassword };
      users.push(user);
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error({ error: 'Internal server error' });
    }
  });
  module.exports = router;