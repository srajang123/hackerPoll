const express = require('express');
const db = require('../util/database');

const isVote = require('../middleware/isVote');

router = express.Router();

router.get('/hackers/', (req, res, next) => {
    db.execute('select * from hacker')
        .then(ret => {
            ret = ret[0];
            let val = [];
            ret.forEach(el => {
                let tmp = {};
                tmp = {
                    id: el.id,
                    name: el.name,
                    count: el.count,
                    expertise: el.expertise,
                    expert: JSON.parse(el.expert)
                }
                val.push(tmp);
            });
            res.send(val);
        })
        .catch(err => {
            console.log('Error occured ' + err);
        })
});
router.post('/vote/', isVote, (req, res, next) => {
    db.execute('select * from hacker where id=?', [req.body.id])
        .then(ret => {
            let val = ret[0][0].votes + 1;
            db.execute('update hacker set votes=? where id=?', [val, req.body.id])
                .then(re => {
                    res.cookie('voted', true);
                    res.send(JSON.stringify({ status: 1 }));
                })
                .catch(err => {
                    console.log(err);
                })
        })
});
module.exports = router;