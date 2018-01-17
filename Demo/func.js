function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, "Hello");

// 匿名函数
execute(function (word) {
    console.log(word);
}, "haha");

var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);