const express = require("express");
const prisma = require("../client");

const router = express.Router();

// ROUTE: api/artist
// GET all artists
router.get('/', async (req, res, next) => {
  try {
    const allArtists = await prisma.artist.findMany();
    res.send(allArtists);
  } catch (error) {
    console.error(error)
    next(error);
  } 
});

// ROUTE: api/artist/:id
// GET individual artist
router.get('/:id', async (req, res, next) => {
  const artistId = parseInt(req.params.id);

  try {
     const singleArtist = await prisma.art.findUnique({
      where: {
        id: artistId,
      }
     });
    res.send(singleArtist);
  } catch (error) {
    console.error(error)
    next(error);
  }
});

module.exports = router;
