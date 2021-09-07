"use strict";

const UserStorage = require('./UserStorage');

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    // get data from UserStorage
    const {id, password} = await UserStorage.getUserInfo(client.id);
    
    // id가 storage에 있는지 체크
    if(id) {
      // storage값과 client가 입력한 값이 같을시   
      if(id === client.id && password === client.password) {
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

  async register() {
    const client = this.body;
    try {
      // save client info to UserStorage
      const response = await UserStorage.save(client);
      return response;
    }
    catch(err) {
      return {success: false, msg: err};
    }
 
  }

}

module.exports = User;