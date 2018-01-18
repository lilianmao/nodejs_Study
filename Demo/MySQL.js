var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '985112messi',
    port     : '3306',
    database : 'll_db'
});

function insert(sql, addSqlParams) {
    connection.connect();

    connection.query(sql, addSqlParams, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return ;
        }

        console.log('--------------------------INSERT----------------------------');
        console.log('INSERT ID:', result);
        console.log('------------------------------------------------------------\n\n');
    });

    connection.end();
}

function query(sql) {
    connection.connect();

    connection.query(sql,function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }

        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        console.log('------------------------------------------------------------\n\n');
    });

    connection.end();

}

// 修改错误，学习express，参考其他MySQL的封装
exports.insert = insert;
exports.query = query;
query('select * from students');
