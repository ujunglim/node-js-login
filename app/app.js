"use strict";

// module
const express = require('express');
const app = express();

// routing
const home = require('./src/routes/home');

// app setting
app.set('views', './src/views');
app.set('view engine', 'ejs');

// middleware
// 정적경로 추가  __dirname: app.js가 있는 위치반환 
app.use(express.static(`${__dirname}/src/public`));
app.use("/", home); // 루트경로로 들어오면 홈으로 보내줌.

module.exports = app;
