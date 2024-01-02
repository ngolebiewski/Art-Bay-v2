const express = require('express');
const app= express();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const router = require("express").Router();
require("dotenv").config();
const port = 3000;

app.use(bodyParser.json());

// sample users
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
  ];

// Secret key for JWT 
const JWT_SECRET = "Pizza";

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

router.use('/login', require('./loginRoute.js'))
router.use('/register', require('./registerRoute.js'))

module.exports = router;