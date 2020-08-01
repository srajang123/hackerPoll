const express = require('express');

router = express.Router();

router.get('/', (req, res, next) => {
    console.log('Request from general');
})

module.exports = router;