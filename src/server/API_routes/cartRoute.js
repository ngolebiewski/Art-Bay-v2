const express = require("express");
const prisma = require("../client");

const router = express.Router();

//TO DO!
//get guest cart from local storage
//logic in front end?
//TBD


////////////////////////
///// HELPER FUNCTIONS
////////////////////////

const makeCart = async () => {
  console.log("hi");
  try {
    const newCart = await prisma.orderDetail.create({
      data: {
        isComplete: false,
        userId: req.user.id,
      },
    });
    console.log(newCart);
    console.log();
    return res.send(newCart);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

//delete item helper function
const deleteCartItem = async (itemId) => {
  try {
    const deletedCartItem = await prisma.cartItem.delete({
      where: {
        id: +itemId,
      },
    });
    return deletedCartItem;
  } catch (error) {
    console.error(error);
  }
};


////////////////////
///// GET //////////
////////////////////

// ROUTE: api/cart --> gets the current cart for the user (Need a token)
router.get("/", async (req, res, next) => {
  if (!req.user) {
    return res.status(401).send(
"You're a guest, but please keep on shopping. Feel free to register!"
      );
  }

  // see if the logged in user has an active cart (aka orderDetail) =>
  // is there an orderDetail with their id & a 'false' for is complete?
  try {
    const userCart = await prisma.orderDetail.findMany({
      where: {
        userId: req.user.id,
        isComplete: false,
      },
    });

    if (userCart.length > 0) {
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

////////////////////
///// POST /////////
////////////////////

//sample JSON Body along with a proper Bearer token
// {
//   "artId":1,
//   "quantity":17,
//   "orderId":3,
//   "userId":5
// }

//  POST ROUTE: api/cart/ --> Add product(s) to cart
//need to send this the art id, qty, and cart id in req.body -> Front End stuff
//LOGIC: assume the username/cart/etc. are already vetted...

router.post("/", async (req, res, next) => {
  if (!req.user) {return res.status(401).send("You're a guest, but please keep on shopping. Feel free to register!")}
  
  const { artId, quantity, orderId, userId } = req.body;

  if (+req.user.id !== +userId) {
    return res.status(401).send("Oops, this is not your cart")
  }

  try {
    const addedItem = await prisma.cartItem.create({
      data: {
        quantity,
        artId,
        orderId,
      },
    });

    return res.send(addedItem);
  } catch (error) {
    console.error(error);
    next(error);
  }
});


////////////////////
///// UPDATE ///////
////////////////////

// PUT api/cart/ --> Edit product Qty in cart
router.put("/", async (req, res, next) => {
  if (!req.user) {return res.status(401).send("You're a guest, but please keep on shopping. Feel free to register!")}
  
  const { artId, quantity, orderId, id } = req.body;

  // if user sets qty to 0 then delete the item from the cart
  if (quantity < 1) {
    const deleteItem = await deleteCartItem(id);
    return res.send(deleteItem);
  }

  // update the qty if 1 or more
  try {
    const updatedItem = await prisma.cartItem.update({
      where: {
        id:id,
      },
      data: {
        quantity,
      }
    });
    return res.send(updatedItem);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

////////////////////
///// DELETE ///////
////////////////////

//DELETE api/cart/:id --> Delete item from cart
router.delete("/:id", async (req, res, next) => {
  if (!req.user) {return res.status(401).send("You're a guest, but please keep on shopping. Feel free to register!")}
  
  const { id } = req.params;

  try {
    const deletedItem = await deleteCartItem(id);

    if (!deletedItem) {
      return res.status(404).send("Item not found or already deleted");
    }
    res.send(deletedItem);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
