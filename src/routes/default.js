const express = require('express');

const router = express.Router();

router.get("/", (_, res) => {
    res.render('pages/index')
});

module.exports = router;