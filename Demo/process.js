process.on('exit', function (code) {
    setTimeout(function () {
        console.log("该代码不会执行");
    }, 0);

    console.log('exit code: ', code);
});

console.log("程序执行结束");

// 输出到终端
process.stdout.write("Hello World!" + "\n");

// argv 属性返回一个数组，由命令行执行脚本时的各个参数组成。
// 它的第一个成员总是node，第二个成员是脚本文件名，其余成员是脚本文件的参数。
process.argv.forEach(function (value, index, array) {
    console.log(index + ': ' + value);
});

// 获取执行路径
console.log(process.execPath);

// 平台信息
console.log(process.platform);

