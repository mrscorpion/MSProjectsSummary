# MSProjectsSummary
HTML5 &amp; Wired AudioUnit Framework API...

---
## HTML5 
WKWebview & JavaScript
- ### [MSShare](http://api.enjoy-plus.com/Home/index/share?id=438&appName=爱雅科技&appDesc=让社交变得更真实!&release_channel=BURN.BW-A&download=下载App&hotListTitle=睡不着～)

  + [Article](#)
  
  + Code
    * [HTML5](#)
    * [PHP](#)
    
  + Images
  ![](MSHTML5/MSShare/share01.png)
  ![](MSHTML5/MSShare/share02.png)
  
  + Links
    + [Video](http://api.enjoy-plus.com/Home/index/share?id=438&appName=%E7%88%B1%E9%9B%85%E7%A7%91%E6%8A%80&appDesc=%E8%AE%A9%E7%A4%BE%E4%BA%A4%E5%8F%98%E5%BE%97%E6%9B%B4%E7%9C%9F%E5%AE%9E!&release_channel=BURN.BW-A&download=%E4%B8%8B%E8%BD%BDApp&hotListTitle=%E7%9D%A1%E4%B8%8D%E7%9D%80%EF%BD%9E)
    + [Image](http://api.enjoy-plus.com/Home/index/share?id=438&appName=%E7%88%B1%E9%9B%85%E7%A7%91%E6%8A%80&appDesc=%E8%AE%A9%E7%A4%BE%E4%BA%A4%E5%8F%98%E5%BE%97%E6%9B%B4%E7%9C%9F%E5%AE%9E!&release_channel=BURN.BW-A&download=%E4%B8%8B%E8%BD%BDApp&hotListTitle=%E7%9D%A1%E4%B8%8D%E7%9D%80%EF%BD%9E)


- ### [MSBlueToothGuide](http://api.enjoy-plus.com/help/MSBlueTooth.html)+
    ![](MSHTML5/MSBlueToothSetting/bluetooth.png)
    
- ### [MSHelp](http://203.88.167.184/help/index.html)

- ### [MSIntroduce](http://api.enjoy-plus.com/help/introduce.html)

- ### 恭贺新春HTML5小demo，下载演示视频：
 ![](MSHTML5/MSHappynewyear/happynewyear.mp4)

- ### [个人网站](http://liujinlongxa.com)

---
## PHP
- 添加水印
![](MSPHP/MSPHPFunction/watermark.png.jpeg)

- 随机验证码
- session保存登录数据

---
## Wired API Guidance Note
### How to use this framework
- 1.git clone  
- 2.Drag in to your progrect  
- 3.`Build Pharse -> Other Linker Flags` add `-all_load`  
- 4.#import <WiredFramework/MSAudioManager.h>  
- 5.Using example:
```ObjC
[[MSAudioManager sharedInstance] sendCustomWithLever:1];
```

---
## MRCX 微信小程序
- 简易计算器
- 跑步小程序：跑步功能 & 基础动画
  
### 问题
```
VM134:2 app.json Expecting 'STRING','NUMBER','NULL','TRUE','FALSE','{','[', got INVALID     | ^
```
### 原因
在app.json中去掉注释即可：// app.json 全局配置


---
## [Control Video links](http://i.youku.com/i/UNTI0MzMwMDQ4?spm=a2h0j.8191423.subscription_wrap.DD~A.s9qhh2)
- [Wired](http://v.youku.com/v_show/id_XMTg4NzY5MTM3Mg==.html?spm=a2hzp.8244740.userfeed.5!2~5~5~5!3~5~A.MWf5qD)
- [Bluetooth](http://v.youku.com/v_show/id_XMTYxMDE4MTg4NA==.html?spm=a2hzp.8244740.userfeed.5!8~5~5~5!3~5~A.MWf5qD)

---
## Java & C & C++ & Objective-C & Swift & PHP & lua & node.js
samlpe examples: how to use these languages

#### Java  
#### C 
#### C++
#### Objective-C
#### Swift
#### PHP

#### lua 安装使用（Mac OS X系统）

- cd **

- 执行指令 （示例使用的是5.3.0版本）
  + curl -R -O http://www.lua.org/ftp/lua-5.3.0.tar.gz  
  + tar zxf lua-5.3.0.tar.gz  
  + cd lua-5.3.0  
  + make macosx test  
  + make install  
    * 如若报错，如下  
    ```ObjC
cd src && mkdir -p /usr/local/bin /usr/local/include /usr/local/lib /usr/local/man/man1 /usr/local/share/lua/5.3 /usr/local/lib/lua/5.3
    mkdir: /usr/local/man/man1: Permission denied
    make: *** [install] Error 1
```
      * 使用 sudo make install
    

- 使用示例 (创建一个 helloworld.lua 文件)
 + cd ~/desktop  
 + mkdir helloworld  
 + cd helloworld  
 + touch helloworld.lua  
 + vim helloworld.lua  
    * 添加代码  `print("hello lua")`
 + lua HelloWorld.lua  
    * 输出结果 `hello lua`
    
#### node.js
##### 简单示例
* vim server.js
* 添加代码
```
// 1. 引入 required 模块
var http = require('http');

// 2. 创建服务器
http.createServer(function (request, response) {

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// 发送响应数据 "Hello World"
	response.end('Hello World\n');
}).listen(8090);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8090/');
```

* node server.js

	  `Server running at http://127.0.0.1:8090/`
  
* 使用浏览器访问 `http://127.0.0.1:8090/`
	
	```Hello World```
