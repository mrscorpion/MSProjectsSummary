/**************** 模块 *****************/

// 引入了当前目录下的hello.js文件 （./ 为当前目录，node.js默认后缀为js）
var Hello = require('./hello');
hello = new Hello();
hello.setName('mr');
hello.sayHello();