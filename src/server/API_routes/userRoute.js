const express = require("express");
const prisma = require("../client");
const router = express.Router();

// ROUTE GET: api/user
router.get('/', async (req, res, next) => {
  if (!req.user) {res.sendStatus(401); 
    return}

  try {
    const userInfo = await prisma.user.findUnique({
      where: {
        id:req.user.id,
      }
    })
    res.send(userInfo)
  } catch (error) {
    console.error(error);
    next(error);
  }
});


// ROUTE PUT: api/user/:id
// update address informaton on user info
// need to confirm token is the person to edit or admin

module.exports = router;