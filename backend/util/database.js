const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'srajan',
    password: 'Project@123',
    database: 'coda'
});
module.exports = pool.promise();