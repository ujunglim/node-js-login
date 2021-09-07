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

	static #getUsers(data, isAll, fields) {
		const users = JSON.parse(data);
		if(isAll) return users;

		const newUsers = fields.reduce((newUsers, field) => {
			if(users.hasOwnProperty(field)) {
				newUsers[field] = users[field];
			}
			return newUsers;
		}, {});
		return newUsers;
	}

	// 저장된 데이터 반환
	static getUsers(isAll, ...fields) {
		return fs.readFile('./src/databases/users.json')
			.then((data) => {
				return this.#getUsers(data, isAll, fields);
			})
			.catch(console.err);
	}

	// 요청하는 id에 해당하는 데이터만 반환
	static getUserInfo(id) {
		return fs.readFile('./src/databases/users.json')
			.then((data) => {
				return this.#getUserInfo(data, id);
			})
			.catch(console.err);
	}

	static async save(userInfo) {
		// read previous data
		const users = await this.getUsers(true);
		// check id already exists or not
		if(users.id.includes(userInfo.id)) {
			throw 'The Id already exists';
		}
		// add new data
		users.id.push(userInfo.id);
		users.password.push(userInfo.password);
		users.name.push(userInfo.name);
		// save to file
		fs.writeFile('./src/databases/users.json', JSON.stringify(users));
		return {success: true};
	}
}

module.exports = UserStorage;