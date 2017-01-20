var fs = require("fs");

// fs.readFile() 是异步函数用于读取文件
fs.readFile('test.txt', function (err, data) {
	// 如果在读取文件过程中发生错误，错误 err 对象就会输出错误信息
    if (err) {
    	return console.error(err);
	}
    console.log(data.toString());
});

console.log("程序执行结束!");
