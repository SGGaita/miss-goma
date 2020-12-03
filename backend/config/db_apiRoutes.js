const Mysqli = require('mysqli');
const dotenv = require('dotenv');


dotenv.config();


let conn = new Mysqli({
    Host: process.env.DB_HOST, // IP/domain name 
    post: process.env.DB_POST, // port, default 3306 
    user: process.env.DB_USER, // username 
    passwd: process.env.DB_PASS, // password 
    db: process.env.DB_DATABASE
});

let db = conn.emit(false, '');

module.exports = {database: db}