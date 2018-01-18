// 输出全局变量 __filename 的值
console.log(__filename);

// 输出全局变量 __dirname 的值
console.log(__dirname);

function printHello() {
    console.log("Hello World!");
}

var t = setTimeout(printHello, 2000);

// 清除定时器
clearTimeout(t);

setInterval(printHello, 2000);

console.info("程序开始执行：");

var counter = 10;
console.log("计数：%d", counter);

console.time("获取数据");

// execute some code

console.timeEnd("获取数据");

console.info("程序执行完毕。");



