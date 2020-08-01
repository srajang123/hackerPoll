const express = require('express');
const db = require('../util/database');

router = express.Router();

router.post('/login', (req, res, next) => {
    const { uname, pass } = req.body;
    db.execute('select * from admin where uname=?', [uname])
        .then(ret => {
            ret = ret[0][0];
            if (!ret) {
                res.send(JSON.stringify({ status: -2 }));
            } else if (ret.pass == pass) {
                res.cookie('isAuth', true);
                res.cookie('username', uname);
                res.send(JSON.stringify({ status: 1 }));
            } else {
                res.send(JSON.stringify({ status: -1 }));
            }
        })
});

module.exports = router;