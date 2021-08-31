// // download module 'express'
// const express = require('express');
// // express 실행후 app에 넣어주기
// const app = express();

// // =================================
// // 루트경로지정. 어떤 요청인지 받음
// app.get('/', (req, res) => {
//     // 기능 응답
//     res.send('여기는 루트입니다');
// });

// // / 는 루트 의미, 꼭 넣어줘야함
// app.get('/login', (req, res) => {
//     res.send('login page');
// })
// // =================================

// // listen으로 서버띄우기 (port num, callback)
// app.listen(3000, () => {
//     console.log("Open server");
// })

// http로 서버띄우기
// download http, 내장형이라 따로 npm안해도됨 
const http = require('http');

const app = http.createServer((req, res) => {
    console.log(req.url); // 아무거나 req하는거 url 찍힘

    // 브라우저가 한글로 해석을 한다고 응답을 해줘야함
    // 200 정상응답코드를 보냄 
    // 내가 보내는게 텍스트 중 html이고, utf-8로 해석을 해달라고 응답
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"})

    if(req.url === '/') {
        res.end('http root 입니다'); // 한글이 깨짐
    }
    else if(req.url === '/login') {
        res.end('http login 입니다');
    }
});

app.listen(3001, () => {
    console.log('server with http');
})
