const express = require("express");

const router = express.Router();
const prisma = require("../client");

// X   GET api/cart --> gets the current cart for the user (Need a token)
// POST api/cart/ --> Add product to cart
// PUT api/cart/:id --> Add product to cart
// DELETE api/cart/:id --> Delete item from cart


//get guest cart from local storage
//logic in front end?
//TBD

// ROUTE: api/cart --> gets the current cart for the user (Need a token)
router.get("/", async (req, res, next) => {
  if (!req.user) {
    return res
      .status(401)
      .send(
        "You're a guest, but please keep on shopping. Feel free to register!"
      );
  }

  //see if the logged in user has an active cart (aka orderDetail) =>
    // is there an orderDetail with their id & a 'false' for is complete?
    // If not make a new cart that will be false.
  try {
    const userCart = await prisma.orderDetail.findMany({
      where: {
        userId: req.user.id,
        isComplete: false,
      },
    });

    if (userCart) {
      return res.send(userCart);
    }

    // If no active cart, create a new one
    const newCart = await prisma.orderDetail.create({
      data: {
        isComplete: false,
        userId: req.user.id,
      },
    });

    return res.send(newCart);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// PUT api/cart/:id --> Add product to cart
//look got userID

// router.get('/', async (req, res, next) =>

// ROUTE: api/cart

module.exports = router;
