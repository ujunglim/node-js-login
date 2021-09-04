"use strict";

const UserStorage = require('./UserStorage');

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const body = this.body;
    // get data from UserStorage
    const {id, password} = UserStorage.getUserInfo(body.id);
    
    // id가 storage에 있는지 체크
    if(id) {
      // storage값과 client가 입력한 값이 같을시   
      if(id === body.id && password === body.password) {
        return {success: true};
      } 
      return {
        success: false,
        msg: 'wrong password'
      }
    }
    return {
      success: false,
      msg: 'id is not exist'
    }
   
  }

}

module.exports = User;