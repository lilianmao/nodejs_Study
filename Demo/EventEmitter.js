var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

// 延时调用
// emitter.on('some_event', function () {
//     console.log('some_event 事件触发');
// });
//
// setTimeout(function () {
//     emitter.emit('some_event');
// }, 1000);

//当事件触发时，注册到这个事件的事件监听器被依次调用
// emitter.on('someEvent', function (arg1, arg2) {
//     console.log('listener1', arg1, arg2);
// });
//
// emitter.on('someEvent', function (arg1, arg2) {
//     console.log('listener2', arg1, arg2);
// });
//
// emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');

// 为指定事件注册一个单次监听器，监听器最多触发一次，触发后立即解除。
// emitter.once('once', function (stream) {
//     console.log('Ah, we have our first user!');
// });
//
// emitter.emit('once', 'haha');

// 一个比较大的demo，主要测试add和remove

var listener1 = function listener1() {
    console.log('监听器 listener1 执行。');
}

var listener2 = function listener2() {
    console.log('监听器 listener2 执行。');
}

emitter.addListener('connection', listener1);

emitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(emitter, 'connection');
console.log(eventListeners + " 个监听器监听连接事件");

emitter.emit('connection');

emitter.removeListener('connection', listener1);
console.log('listener1 不再受监听。');

emitter.emit('connection');

var eventListeners = require('events').EventEmitter.listenerCount(emitter, 'connection');
console.log(eventListeners + " 个监听器监听连接事件");

console.log('程序执行完毕。');

