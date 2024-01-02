const express = require('express');

const router = express.Router();
const prisma = require ("../client");


// GET api/cart --> gets the current cart for the user (Need a token)
// POST api/cart/ --> Add product to cart
// PUT api/cart/:id --> Add product to cart
// DELETE api/cart/:id --> Delete item from cart


// ROUTE: api/cart --> gets the current cart for the user (Need a token)
// router.get('/', async (req, res, next) => {
//   if (!req.user) {
//     return;
//     //get guest cart from local storage
//     //logic in front end?
//     //TBD
//   }

//   try {
//     const userCart = await prisma.art.findUnique({
//       where: {
//         "user_id":req.user.id

//     }})

//     res.send(allArtworks);
//   } catch (error) {
//     console.error(error)
//     next(error);
//   } 

// });


// PUT api/cart/:id --> Add product to cart
//look got userID


// router.get('/', async (req, res, next) =>

// ROUTE: api/cart




module.exports = router;