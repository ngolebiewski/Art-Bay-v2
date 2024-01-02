const express = require(`express`);
const router = express.router();

router.get(`/register`, (req, res) => {
    res.json({message: `Register Here!`});
});

module.exports = router;