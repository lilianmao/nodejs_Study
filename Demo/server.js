// var http = require('http');
//
// http.createServer(function (request, response) {
//
//     // 发送 HTTP 头部
//     // HTTP 状态值: 200 : OK
//     // 内容类型: text/plain
//     response.writeHeader(200, {'Content-Type': 'text/plain'});
//
//     response.end('Hello World\n');
// }).listen(8888);
//
// console.log('Server running at http:127.0.0.1:8888/');


// var http = require("http");
// var url = require("url");
//
// function start(route) {
//     function onRequest(request, response) {
//         var pathname = url.parse(request.url).pathname;
//         console.log("Request for " + pathname + " received.");
//
//         route(pathname);
//
//         response.writeHead(200, {"Content-Type": "text/plain"});
//         response.write("Hello World");
//         response.end();
//     }
//
//     http.createServer(onRequest).listen(8888);
//     console.log("Server has started.");
// }
//
// exports.start = start;

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (request, response) {
    // 输出请求的文件名
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received");

    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString())
        }

        response.end();
    });

}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');

