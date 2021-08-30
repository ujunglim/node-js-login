
// download module 'express'
const express = require('express');
// express 실행후 app에 넣어주기
const app = express();

// =================================
// 루트경로지정. 어떤 요청인지 받음
app.get('/', (req, res) => {
    // 기능 응답
    res.send('여기는 루트입니다');
});

// / 는 루트 의미, 꼭 넣어줘야함
app.get('/login', (req, res) => {
    res.send('login page');
})
// =================================

// listen으로 서버띄우기 (port num, callback)
app.listen(3000, () => {
    console.log("Open server");
})