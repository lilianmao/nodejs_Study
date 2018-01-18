var util = require('util');

function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function() {
    console.log(this.name);
};
function Sub() {
    this.name = 'sub';
}

// Sub 继承 Base
// Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);

// 将任意对象转换 为字符串的方法，用于调试错误。
function Person() {
    this.name = "lilin";
    this.toString = function () {
        return this.name;
    };
}

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));


// 是不是数组
util.isArray([])
util.isArray(new Array)
util.isArray({})

// 是不是正则表达式
util.isRegExp(/some regexp/)
util.isRegExp(new RegExp('another regexp'))
util.isRegExp({})

// 是不是日期
util.isDate(new Date())
util.isDate(Date()) // false 缺少new
util.isDate({})

// 是不是一个错误对象
util.isError(new Error())       // true
util.isError(new TypeError())   // true
util.isError({ name: 'Error', message: 'an error occurred' }) // false


