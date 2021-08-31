"use strict";

// module
const express = require('express');
const app = express();

const PORT = 3000;

// routing
const home = require('./routes/home');

// app setting
app.set('views', './views');
app.set('view engine', 'ejs');

app.use("/", home); // 루트경로로 들어오면 홈으로 보내줌.
// use는 middleware를 등록하는 메소드

app.listen(PORT, () => {
	console.log("Open server");
})
