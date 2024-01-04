const express = require("express");
const prisma = require("../client");
const router = express.Router();

// ROUTE GET: api/user
router.get('/', async (req, res, next) => {
  if (!req.user) {res.sendStatus(401)};

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

// ROUTE GET: api/user/all
// ADMIN ONLY!
// Gets all users
router.get('/all', async (req, res, next) => {
  if (!req.user) {res.sendStatus(401)};

  const { isAdmin } = await prisma.user.findUnique({where: {id:req.user.id,}})
  if (!isAdmin) {res.sendStatus(401)}

  try {
    const allUsers = await prisma.user.findMany();
    res.send(allUsers)
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// ROUTE GET: api/user/:id
// ADMIN ONLY!
// Gets an individual user record
router.get('/:id', async (req, res, next) => {
  if (!req.user) {res.sendStatus(401)};

  const { isAdmin } = await prisma.user.findUnique({where: {id:req.user.id,}})
  if (!isAdmin) {res.sendStatus(401)}

  try {
    const userInfo = await prisma.user.findUnique({
      where: {
        id:+req.params.id,
      }
    })
    res.send(userInfo)
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// ROUTE PUT: api/user/
// User can only update their own record, primarily for adding an address when checking out
router.put('/', async (req, res, next) => {
  if (!req.user) {res.sendStatus(401)};

  try {
    const userInfo = await prisma.user.update({
      where: {
        id:req.user.id,
      },
      data:req.body,
    })
    res.send(userInfo)
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// ROUTE PUT: api/user/
// ADMIN ONLY!!
router.put('/:id', async (req, res, next) => {
  if (!req.user) {res.sendStatus(401)};

  const { isAdmin } = await prisma.user.findUnique({where: {id:req.user.id,}})
  if (!isAdmin) {res.sendStatus(401)}

  try {
    const userInfo = await prisma.user.update({
      where: {
        id:+req.params.id,
      },
      data:req.body,
    })
    res.send(userInfo)
  } catch (error) {
    console.error(error);
    next(error);
  }
});


// ROUTE DELETE: api/user/:id
// ADMIN ONLY
// WARNING! can only delete if user has no foreign keys...
router.delete('/:id', async (req, res, next) => {
  if (!req.user) {res.sendStatus(401)};
  
  const { isAdmin } = await prisma.user.findUnique({where: {id:req.user.id,}})
  if (!isAdmin) {res.sendStatus(401)}
 
  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id:+req.params.id,
      }
    })
    res.send(deletedUser)
  } catch (error) {
    console.error(error);
    next(error);
  }
});


module.exports = router;