// var fs = require("fs");
// var data = '';
//
// // Stream有四种类型：Readable、Writable、Duplex(可读写)、Transform(操作被写入数据，然后读出结果。)
// // 创建可读流
// var readerStream = fs.createReadStream('input.txt');
//
// readerStream.setEncoding('UTF8');
//
// // 所有的 Stream 对象都是 EventEmitter 的实例。常用的是：data、end、error、finish
// // 处理流事件 --> data, end, and error
// readerStream.on('data', function (chunk) {
//     data += chunk;
// });
//
// readerStream.on('end', function () {
//     console.log(data);
// });
//
// readerStream.on('error', function (err) {
//     console.log(err.stack);
// });
//
// console.log("程序执行完毕");


// var fs = require("fs");
// var data = '周周：www.zhouzhou.com';
//
// // 创建一个可以写入的流，写入到文件 output.txt 中
// var writerStream = fs.createWriteStream('output.txt');
//
// // 使用 utf8 编码写入数据
// writerStream.write(data,'UTF8');
//
// // 标记文件末尾
// writerStream.end();
//
// // 处理流事件 --> data, end, and error
// writerStream.on('finish', function() {
//     console.log("写入完成。");
// });
//
// writerStream.on('error', function(err){
//     console.log(err.stack);
// });
//
// console.log("程序执行完毕");


// // 管道流
//
// var fs = require('fs');
//
// var readerStream = fs.createReadStream('input.txt');
//
// var writerStream = fs.createWriteStream('output.txt');
//
// // 管道读写操作：读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
// readerStream.pipe(writerStream);
//
// console.log("程序执行完毕。");


// 链式流
var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log("文件压缩完成。");

