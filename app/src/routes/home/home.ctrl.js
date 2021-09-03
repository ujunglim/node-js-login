"use strict"

const UserStorage = require('../../models/UserStorage');

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  }
}

const process =  {
  login: (req, res) => {
    const {id, password} = req.body;
    // get data from UserStorage
    const users = UserStorage.getUsers('id', 'password');
    const response = {};

    // authenticate id, password
    if(users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      // 성공시
      if(users.password[idx] === password) {
        response.success = true;
        return res.json(response);
      }
    }

    // 실패할시
    response.success = false; 
    response.msg = "Fail to login."
    return res.json(response);
  }
}

module.exports = {output, process};
