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


// api/art -> POST add new artwork *ADMIN ONLY
router.post('/', async (req, res, next) => {
  // Give non-users the "non-authorized" boot
  if (!req.user) {res.sendStatus(401); 
    return}

  try {
     const newArtwork = await prisma.art.create({
      data: {
        "title":req.body.title, 
        "description":req.body.description,
        "price":req.body.price, 
        "inStock":req.body.inStock,    
        "dimensions":req.body.dimensions,
        "year":req.body.year,            
        "imgUrl":req.body.imgUrl,        
        "medium":req.body.medium,     
        "artistId":req.body.artistId,
      }
     });
    res.send(newArtwork);
  } catch (error) {
    console.error(error)
    next(error);
  }
});

//////////////////////////////////////////////////////
// PUT
// ROUTE(S)
//////////////////////////////////////////////////////

// api/art/:id -> PUT update artwork *ADMIN ONLY
router.put('/:id', async (req, res, next) => {
  // Give non-users the "non-authorized" boot
  if (!req.user) {res.sendStatus(401); 
    return}

  try {
    const artId = +req.params.id
    const postBody = req.body

    const updateArtwork = await prisma.art.update({
      where:{
        "id":artId
      },
      data:postBody,
     });
    res.send(updateArtwork);
  } catch (error) {
    console.error(error)
    next(error);
  }
});


//////////////////////////////////////////////////////
// DELETE
// ROUTE(S)
//////////////////////////////////////////////////////

// api/art/:id ->DELETE remove new artwork *ADMIN ONLY
router.delete('/:id', async (req, res, next) => {
  // Give non-users the "non-authorized" boot
  if (!req.user) {res.sendStatus(401); 
    return}

  try {
    const artId = +req.params.id
    
    const deleteArtwork = await prisma.art.delete({
      where:{
        "id":artId
      },
     });
    res.send(deleteArtwork);
  } catch (error) {
    console.error(error)
    next(error);
  }
});



module.exports = router;