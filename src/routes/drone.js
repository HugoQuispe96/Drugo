const express = require('express');
const router = express.Router();

router.get('/control', (req, res) => {
    res.render('drone/control');
});
router.get('/ver', (req, res) => {
    res.render('drone/ver');
});


module.exports = router;