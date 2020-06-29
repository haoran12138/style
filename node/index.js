// const http = require("http");

// http
//   .createServer(function (request, response) {
//     // 发送 HTTP 头部
//     // HTTP 状态值: 200 : OK
//     // 内容类型: text/plain
//     response.writeHead(200, { "Content-Type": "text/plain" });

//     // 发送响应数据 "Hello World"
//     response.end("Hello World\n");
//   })
//   .listen(8888);
// console.log("Server running at http://127.0.0.1:8888/");

// 同步  阻塞式
const fs = require("fs");
let data = fs.readFileSync("a.txt");
console.log(data.toString());

// 异步 非阻塞式
fs.readFile("aa.txt", function (err, data) {
  if (err) return console.log(err);
  console.log(data.toString());
});
