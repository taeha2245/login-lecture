"use strict";
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     res.send("여기는 루트입니다.");
// });

// app.get("/login", (req, res) => {
//     res.send("여기는 로그인 화면입니다.")
// });

// app.listen(3000, () => {
//     console.log("서버 가동");
// });

// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, { "content-Type" : "text/html; charset=utf-8"});
//     if (req.url === "/") {
//         res.end("여기는 루트입니다.");
//     } else if (req.url === "/login") {
//         res.end("여기는 로그인입니다.");
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.");
// });
// ======================================================================================================================================



// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
// ${__dirname} -> app.js 의 위치 안에 있는 src 안에 있는 public을 정적경로로 설정
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home);  // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;


