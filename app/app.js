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
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: true}));
app.use("/", home); 

module.exports = app;
