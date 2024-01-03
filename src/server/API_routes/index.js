const router = require("express").Router();

router.use('/art', require('./artRoute.js'))
router.use('/artist', require('./artistRoute.js'))
router.use('/cart', require('./cartRoute.js'))
router.use('/checkout', require('./checkout.js'))
router.use('/user', require('./userRoute.js'))

module.exports = router;