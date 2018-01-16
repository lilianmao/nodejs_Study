// const buf = Buffer.from('李林', 'ascii');
//
// console.log(buf.toString('hex'));
//
// console.log(buf.toString('base64'));
//
// // alloc and from
//
// // 创建一个长度为 10、且用 0 填充的 Buffer。
// const buf1 = Buffer.alloc(10);
//
// // 创建一个长度为 10、且用 0x1 填充的 Buffer。
// const buf2 = Buffer.alloc(10, 1);
//
// // 创建一个长度为 10、且未初始化的 Buffer。这个方法比调用 Buffer.alloc() 更快。
// // 但返回的 Buffer 实例可能包含旧数据，因此需要使用 fill() 或 write() 重写。
// const buf3 = Buffer.allocUnsafe(10);
//
// const buf4 = Buffer.from([1, 2, 3]);
//
// const buf5 = Buffer.from('tést');
//
// // 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
// const buf6 = Buffer.from('tést', 'latin1');


// buf = Buffer.alloc(256);
// len = buf.write("www.lilianmao.com");
//
// console.log("写入字节数：" + len);


// buf = Buffer.alloc(26);
// for (var i = 0; i<26; i++) {
//     buf[i] = i+97;
// }
//
// console.log( buf.toString('ascii'));         // 输出: abcdefghijklmnopqrstuvwxyz
// console.log( buf.toString('ascii', 0, 5));   // 输出: abcde
// console.log( buf.toString('utf8', 0, 5));    // 输出: abcde
// console.log( buf.toString(undefined, 0, 5))  // 默认使用 'utf8' 编码, 并输出: abcde
//
// var json = buf.toJSON(buf);
// console.log(json);


var buffer1 = Buffer.from('lilin');
var buffer2 = Buffer.from('www.lilianmao.com');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3: ", buffer3);

var result = buffer1.compare(buffer2);
console.log('result: ', result);

//将 buf2 插入到 buf1 指定位置上
buffer2.copy(buffer1, 2);
console.log(buffer1.toString('ascii'));

var sliceBuf = buffer1.slice(0, 2);
console.log(sliceBuf.toString());

