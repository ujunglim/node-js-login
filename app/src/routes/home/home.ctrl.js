"use strict"

const User = require('../../models/User');

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
  register: (req, res) => {
    res.render('home/register');
  }
}

const process =  {
  login: (req, res) => {
    // 클라이언트 전달한 req 데이터를 넣어서 instance화
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
  register: (req, res) => {
    const user = new User(req.body);
    const response = user.register();
    return res.json(response);
  }
}

module.exports = {output, process};
