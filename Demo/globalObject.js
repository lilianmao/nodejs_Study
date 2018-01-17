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

