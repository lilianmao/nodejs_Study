var db = {};
var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '985112messi',
    port            : '3306',
    database        : 'll_db'
});

db.insert = function insert(sql, addSqlParams) {

    pool.query(sql, addSqlParams, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return ;
        }

        console.log('--------------------------INSERT----------------------------');
        console.log('INSERT ID:', result);
        console.log('------------------------------------------------------------\n\n');
    });

}

db.query = function query(sql) {

    pool.query(sql,function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }

        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        console.log('------------------------------------------------------------\n\n');
    });

}

module.exports = db;
