const express = require('express');

const router = express.Router();
const prisma = require ("../client");

//////////////////////////////////////////////////////
// GET 
// ROUTES
//////////////////////////////////////////////////////

// ROUTE: api/art
// WHAT IT DOES: Returns all artworks in the database
// SECURITY: Everyone
router.get('/', async (req, res, next) => {
  try {
    const allArtworks = await prisma.art.findMany();
    res.send(allArtworks);
  } catch (error) {
    console.error(error)
    next(error);
  } 

});


// ROUTE: api/art/:id
// WHAT IT DOES: Returns details of one artwork by artworkID
// SECURITY: Everyone
router.get('/:id', async (req, res, next) => {
  const artId = parseInt(req.params.id);

  try {
     const singleArtwork = await prisma.art.findUnique({
      where: {
        id: artId,
      }
     });
    res.send(singleArtwork);
  } catch (error) {
    console.error(error)
    next(error);
  }
});



module.exports = router;