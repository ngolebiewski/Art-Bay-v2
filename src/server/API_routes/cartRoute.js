const express = require("express");

const router = express.Router();
const prisma = require("../client");

// X   GET api/cart --> gets the current cart for the user (Need a token)
//  POST api/cart/ --> Add product to cart
// PUT api/cart/:id --> Add product to cart
// DELETE api/cart/:id --> Delete item from cart


//TO DO!
//get guest cart from local storage
//logic in front end?
//TBD

const makeCart = async () => {
  console.log("hi")
    try {const newCart = await prisma.orderDetail.create({
      data: {
        isComplete: false,
        userId: req.user.id,
      },
    });
    console.log(newCart)
    console.log()
    return res.send(newCart);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

// ROUTE: api/cart --> gets the current cart for the user (Need a token)
router.get('/', async (req, res, next) => {
  if (!req.user) {
    return res
      .status(401)
      .send(
        "You're a guest, but please keep on shopping. Feel free to register!"
      );
  }

  //see if the logged in user has an active cart (aka orderDetail) =>
    // is there an orderDetail with their id & a 'false' for is complete?
  try {
    const userCart = await prisma.orderDetail.findMany({
      where: {
        userId: req.user.id,
        isComplete: false,
      },
    });

    if (userCart.length > 0 ) {
      return res.send(userCart);
    }

    //If no active cart, create a new one
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

//  POST api/cart/:id/:quantity --> Add product(s) to cart
router.post('/', async (req, res, next) => {
//need to send this the art id, qty, and cart id in req.body -> Front End stuff
//orderID *IS* the cart Id
//LOGIC: assume the username/cart/etc. are already vetted...
  const { artId, quantity, orderId } = req.body;
  
  try{ const addedItem = await prisma.cartItem.create({
    data: {
      quantity,
      artId,
      orderId,
    }
  })

  return res.send(addedItem);
  } catch (error) {
    console.error(error);
    next(error);
  }
});









module.exports = router;
