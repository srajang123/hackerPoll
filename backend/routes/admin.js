const express = require('express');
const isAuth = require('../middleware/isAuth');
const db = require('../util/database');

router = express.Router();

router.post('/add', isAuth, (req, res, next) => {
    const data = {
        id: 0,
        name: req.body.name,
        count: req.body.count,
        expertise: req.body.expertise,
        expert: JSON.stringify(req.body.expert),
        votes: 0
    };
    db.execute('select * from hacker')
        .then(ret => {
            data.id = ret[0].length + 1;
            db.execute('insert into hacker values(?,?,?,?,?,?)', [data.id, data.name, data.count, data.expertise, data.expert, data.votes]);
        })
})

module.exports = router;