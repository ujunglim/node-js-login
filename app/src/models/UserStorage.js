"use strict";

const fs = require("fs").promises;

class UserStorage {
	static #getUserInfo(data, id) {
		const users = JSON.parse(data);
		const index = users.id.indexOf(id);
		const keys = Object.keys(users); // => [id, password, name]
		const userInfo = keys.reduce((newUser, key) => {
			newUser[key] = users[key][index];
			return newUser;
		}, {});
		
		return userInfo;
	}

	// 저장된 데이터 반환
	static getUsers(...fields) {
		const newUsers = fields.reduce((newUsers, field) => {
			if(users.hasOwnProperty(field)) {
				newUsers[field] = users[field];
			}
			return newUsers;
		}, {});
		return newUsers;
	}

	// 요청하는 id에 해당하는 데이터만 반환
	static getUserInfo(id) {
		return fs.readFile('./src/databases/users.json')
			.then((data) => {
				return this.#getUserInfo(data, id);
			})
			.catch(console.err);
	}

	static save(userInfo) {
		// const users = this.#users;
		
		users.id.push(userInfo.id);
		users.name.push(userInfo.name);
		users.password.push(userInfo.password);
		return {success: true};
	}
}

module.exports = UserStorage;