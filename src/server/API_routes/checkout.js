const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Assuming this is a logged-in user


  // Extracting shipping information 
router.post('/', async (req, res) => {
  try {
    const {
      streetAddress,
      secondaryStreetAddress,
      city,
      state,
      country,
      phoneNumber,
      zipCode,
    } = req.body;


    const order = await prisma.orderDetail.create({
      data: {
        user: {
          connect: {
            id: req.user.id, 
          },
        },
        isComplete: false,
      },
    });

    // Creating cart items for the order
    const cartItems = await Promise.all(
      req.body.cartItems.map(async (item) => {
        const art = await prisma.art.findUnique({
          where: {
            id: item.artId,
          },
        });

        return prisma.cartItem.create({
          data: {
            quantity: item.quantity,
            art: {
              connect: {
                id: art.id,
              },
            },
            order: {
              connect: {
                id: order.id,
              },
            },
          },
        });
      })
    );

    // Stores shipping information in the user record
    await prisma.user.update({
      where: {
        id: req.user.id, 
      },
      data: {
        streetAddress,
        secondaryStreetAddress,
        city,
        state,
        country,
        phoneNumber,
        zipCode,
      },
    });

    // Redirects to the payment portal 
    res.json({ orderId: order.id });
  } catch (error) {
    console.error('Error processing checkout', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
