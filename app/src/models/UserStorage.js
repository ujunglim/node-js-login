"use strict";

class UserStorage {
	static #users = {
		id: ['yu', 'yuyu', 'yujung'],
		password: ['1234', '1234', '123456'],
		name: ['yujung1', 'yujung2', 'yujung3'],
	};

	// 저장된 데이터 반환
	static getUsers(...fields) {
		const users = this.#users;
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
		const users = this.#users;
		const index = users.id.indexOf(id);
		const keys = Object.keys(users); // => [id, password, name]

		const userInfo = keys.reduce((newUser, key) => {
			newUser[key] = users[key][index];
			return newUser;
		}, {});

		return userInfo;
	}
}

module.exports = UserStorage;