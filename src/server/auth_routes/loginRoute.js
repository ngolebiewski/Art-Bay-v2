const express = require('express');
const { PrismaClient } = require("@prisma/client");
const router = express.Router();
const prisma = new PrismaClient()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

router.get('/', async (req, res) => {
  res.send('hello!')
    // try {
    //   const { username, password } = req.body;

    //   const user = await prisma.user.findUnique({
    //     where: { username: username , password: password},


    //   });

router.post('/', async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = users.find(u => u.username === username);

  
    //   // if (user && (await bcrypt.compare(password, user.password))) {
    //     if (user) {
    //     const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);
    //     res.json({ token });
    //   } else {
    //     res.status(401).json({ error: 'Invalid credentials' });
    //   }
    // } catch (error) {
    //   res.status(500).json({ error: 'Internal server error' });
    // }
  });
  module.exports = router;