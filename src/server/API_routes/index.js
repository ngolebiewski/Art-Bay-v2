const router = require("express").Router();

router.use('/art', require('./artRoute.js'))
router.use('/artist', require('./artistRoute.js'))
router.use('/cart', require('./cartRoute.js'))
router.use('/checkout', require('./checkout.js'))

module.exports = router;