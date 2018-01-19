var express = require('express');
var app = new express();
var router = express.Router();
var http = require('http');
var util = require('util');
var querystring = require('querystring');

var sql = require('./callStackSql');
var mysql = require('../db/DBOperation');

var callChainId = 1;

/* GET users listing. */
router.get('/index.html', function(req, res, next) {
    console.log("welcome CallStack");

    req.on('end', function(){
        // TODO: 使用callback把数据取回来，并展示。
        mysql.query(sql);
    });

    var response = {status:1, data:"haha"};
    res.send(JSON.stringify(response));
});

router.post('/postCallStack', function(req, res, next) {
    var post = req.body;

    var callStack = '';
    for (var key in post) {
        if (key == "callStack[]") {
            callStack = post[key];
        }
    }

    for (var item in callStack) {
        var callChain = splitCallChain(callStack[item]);
        console.log(callChain);

        var addSqlParams = [(callChainId++).toString(), callChain[0], callChain[1], callChain[2]];
        mysql.insert(sql.insert, addSqlParams);
    }
});

function splitCallChain(callChain) {
    var array = new Array(3);
    var len = callChain.length;
    var servicePos = callChain.indexOf('service');
    var serviceTypePos = callChain.indexOf('serviceType');

    // TODO: 解析字符串，存在一些hard code。
    var chain = callChain.substr(13, servicePos-15);
    var service = callChain.substr(servicePos+10, serviceTypePos-servicePos-12);
    var serviceType = callChain.substr(serviceTypePos+14, len-serviceTypePos-15);

    array[0] = chain;
    array[1] = service;
    array[2] = serviceType;

    return array;
}

module.exports = router;
