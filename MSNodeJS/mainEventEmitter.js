// EventEmitter 类
var events = require('events');

// eventEmitter
var eventEmitter = new events.EventEmitter();

/****************** 案例1：延迟触发事件 **********************/
// on 函数用于绑定事件函数
eventEmitter.on('delay_event', function() {
	console.log('delay_event 事件触发');
});
// 1 秒后发送事件 delay_event
setTimeout(function() {
	/* emit 属性用于触发一个事件 */
	eventEmitter.emit('delay_event');
}, 1000);


/****************** 案例2：多个监听器 **********************/
// 监听器 1
var listener1 = function listener1(arg1, arg2) {
	console.log('监听器 listener1 执行。', arg1, arg2);
}
// 监听器 2
var listener2 = function listener2(arg1, arg2) {
	console.log('监听器 listener2 执行。', arg1, arg2);
}

// 绑定 connection 事件，处理函数为 listener1
eventEmitter.on('connection', listener1);
// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + ' 个监听器监听连接事件.');

// 触发连接事件 - 处理 connection 事件
eventEmitter.emit('connection', 'arg1 参数', 'arg2 参数');

// 移除监听绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听.");

// 触发连接事件 - 处理 connection 事件
eventEmitter.emit('connection', 'arg1 参数', 'arg2 参数');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");

