"use strict";

const app = require("../app");
const PORT = 3000;

// 실제 서버 가동 부분
app.listen(PORT, () => {
    console.log("서버 가동");
});