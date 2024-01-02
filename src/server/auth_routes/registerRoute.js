const express = require('express');
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');


//REGISTRATION ROUTE
router.post('/', async (req, res) => {
  const { email, firstName, lastName, username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        username,
        password: hashedPassword,
        isAdmin: false,                        
      },
    });
    const token = jwt.sign({id: newUser.id, username: newUser.username}, process.env.JWT_SECRET)
    res.status(201).send({token})

  } catch (error) {
    console.error("Error during registration", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

  module.exports = router;