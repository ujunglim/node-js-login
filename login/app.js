// express로 서버띄우기
// download module 'express'
const express = require('express');
// express 실행후 app에 넣어주기
const app = express();

// setting app (str, 관리할 폴더 이름)
app.set('views', './views');
// html을 어떤 엔진으로 해석할지 set
app.set('view engine', 'ejs'); // ejs는 html과 비슷

// =================================
// 루트경로지정. 어떤 요청인지 받음
app.get('/', (req, res) => {
	// 기능 응답
	res.render('home/index');
});

// / 는 루트 의미, 꼭 넣어줘야함
app.get('/login', (req, res) => {
	res.render('home/login');
})
// =================================

// listen으로 서버띄우기 (port num, callback)
app.listen(3000, () => {
	console.log("Open server");
})
