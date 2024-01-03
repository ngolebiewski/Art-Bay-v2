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

// isAdmin? helper function
const adminStatus = async (id) =>{
  if (!req.user) {return res.status(401).send("Unauthorized, Admin access only")};
  const userData = await prisma.user.findUnique({where: {id:id,}})
  return userData.isAdmin;
}


// ADMIN
// POST Route api/artist
// Creates new artist
router.post('/', async (req, res, next) =>{
  if (!adminStatus(req.user.id));

  const { name, imgUrl } = req.body;
  try {
    const newArtist = await prisma.artist.create({
      data: {
        name,
        imgUrl,
      }

    })
  } catch (error) {
    console.error(error)
    next(error);
  }
})

// ADMIN
// PUT Route api/artist/:id
// Updates artist info
// To do: add in ability to change artworks
router.put('/:id', async (req, res, next) =>{
  if (!adminStatus(req.user.id));

  const { name, imgUrl } = req.body;
  try {
    const updatedArtist = await prisma.artist.update({
      where: {
        id:+req.params.id,
      },
      data: {
        name,
        imgUrl,
      }
    });
    res.send(updatedArtist);
  } catch (error) {
    console.error(error)
    next(error);
  }
})

// ADMIN
// DELETE Route api/artist/:id
// DELETE Artist record
router.delete('/:id', async (req, res, next) =>{
  if (!adminStatus(req.user.id));

  try{
  const deletedArtist = await prisma.artist.delete({
    where: {
      id:+req.params.id,
    }
    })
  res.send(deletedArtist);
  } catch (error) {
    console.error(error)
    next(error);
  }
});


module.exports = router, adminStatus;

