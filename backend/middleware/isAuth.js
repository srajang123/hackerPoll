module.exports = (req, res, next) => {
    if (req.cookies.isAuth === 'true')
        next();
    else
        return res.send(JSON.stringify({ status: -1 }));
};

/*
    Cookies:
    {
        isAuth:true,
        username:''
    }
*/