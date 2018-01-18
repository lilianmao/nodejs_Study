var http = require('http');
var util = require('util');
var querystring = require('querystring');
var mysql = require('./mysql_test');

var callChainId = 1;

http.createServer(function(req, res){
    // 定义了一个post变量，用于暂存请求体的信息
    var post = '';

    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data', function(chunk){
        post += chunk;
    });

    console.log(post);

    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function(){
        post = querystring.parse(post);

        var callStack = '';
        for (var key in post) {
            if (key == "callStack[]") {
                callStack = post[key];
            }
        }

        for (var item in callStack) {
            var callChain = splitCallChain(callStack[item]);
            console.log(callChain);

            var sql = 'INSERT INTO callStack(id, callChain, service, serviceType) VALUES(?,?,?,?)';
            var addSqlParams = [(callChainId++).toString(), callChain[0], callChain[1], callChain[2]];
            mysql.insert(sql, addSqlParams);

            // var sql = 'select * from students;';
            // mysql.query(sql);
        }

        res.end(util.inspect(post));
    });
}).listen(3000);

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
