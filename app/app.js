"use strict";

// module
const express = require('express');
const app = express();

// routing
const home = require('./src/routes/home');

// app setting
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use("/", home); // 루트경로로 들어오면 홈으로 보내줌.
// use는 middleware를 등록하는 메소드

module.exports = app;
