const express = require("express");
const ViteExpress = require("vite-express");

const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const app = express();

const { PrismaClient } = require('@prisma/client')                  //imported prisma to make register form and future routes work
const prisma = new PrismaClient();

//logging middleware 
app.use(morgan("dev"));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//token middleware
app.use((req, res, next) => {
  const bearerInfo = (req.headers.authorization)

  if (!bearerInfo) req.user = null;
  else if (bearerInfo.includes("Bearer ")) {
    const tokenSplit = bearerInfo.split("Bearer ");
    const token = tokenSplit[1]
    try {req.user = jwt.verify(token, process.env.JWT_SECRET)}
    catch(error) {req.user = null};
  }
  else req.user = null;
  console.log("USER: ", req.user);
  next()
});


//API ROUTES
app.use('/api', require("./API_routes/index.js"))
app.use('/auth', require("./auth/auth.js"))

//REGISTRATION ROUTE
app.post('/auth/register', async (req, res) => {
  const { email, firstName, lastName, username, password } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        username,
        password,                          // we need to 'hash' this eventually
      },
    });

    res.status(201).json({ message: 'User registered Successfully', user: newUser });
  } catch (error) {
    console.error("Error during registration", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app, 8000, () =>
  console.log("Server is listening on port 8000..."),
);
