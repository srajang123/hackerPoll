module.exports = (req, res, next) => {
    if (req.cookies.voted === 'true')
        return res.send(JSON.stringify({ status: -1 }));
    next();
};