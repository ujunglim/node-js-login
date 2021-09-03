"use strict"

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  }
}

// fake data
const users = {
  id: ['yu', 'yuyu', 'yujung'],
  password: ['1234', '1234', '123456']
}

const process =  {
  login: (req, res) => {
    const {id, password} = req.body;
    // authenticate id, password
    if(users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if(users.password[idx] === password) {
      // 성공하면 success: true라는 obj를 json으로 만들어서 respond
        return res.json({
          success: true
        })
      }
    }

    // 실패할시
    return res.json({
      success: false,
      msg: "Fail to login."
    });
  }
}

module.exports = {output, process};
