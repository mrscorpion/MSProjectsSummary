/**
1. node index.js
	`Server has started.`
2. 浏览器访问 http://127.0.0.1:8090/
	```
	Request for / received.
	About to route a request for /
	Request for /favicon.ico received.
	About to route a request for /favicon.ico
	```
*/

function route(pathname) {
  console.log("About to route a request for " + pathname);
}

exports.route = route;

