const express = require('express');
const isAuth = require('../middleware/isAuth');
const db = require('../util/database');

router = express.Router();

router.post('/add', isAuth, (req, res, next) => {
    const data = {
        id: 0,
        name: req.body.data.name,
        count: req.body.data.count,
        expertise: req.body.data.expertise,
        expert: JSON.stringify(req.body.data.expert),
        votes: 0
    };
    db.execute('select * from hacker')
        .then(ret => {
            data.id = ret[0].length + 1;
            db.execute('insert into hacker values(?,?,?,?,?,?)', [data.id, data.name, data.count, data.expertise, data.expert, data.votes]);
            res.send(JSON.stringify({status:'success'}));
        })
})
router.post('/update', isAuth, (req, res, next) => {
    const data = {
        id: req.body.data.id,
        name: req.body.data.name,
        count: req.body.data.count,
        expertise: req.body.data.expertise,
        expert: JSON.stringify(req.body.data.expert)
    };
    db.execute('update hacker set name=?,count=?,expertise=?,expert=? where id=?',[data.name,data.count,data.expertise,data.expert,data.id])
    .then(res=>{

    })
    .catch(err=>{console.log('Error occured'+err)});
})
router.get('/hackers/:id',(req,res,next)=>{
    const data={
        name:'',
        count:0,
        expertise:0,
        expert:''
    }
    db.execute('select * from hacker')
    .then(ret=>{
        ret=ret[0][0];
        data.name=ret.name;
        data.count=ret.count;
        data.expertise=ret.expertise;
        data.expert=JSON.parse(ret.expert);
        res.send(data);
    })
})
router.post('/delete/:id',(req,res,next)=>{
    console.log(req.body);
    db.execute('delete from hacker where id=?',[req.body.id])
    .then(re=>{
        res.send(JSON.stringify({status:'success'}));
    })
})

module.exports = router;