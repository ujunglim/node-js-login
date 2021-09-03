"use strict";

class UserStorage {
	static #users = {
		id: ['yu', 'yuyu', 'yujung'],
		password: ['1234', '1234', '123456'],
		name: ['yujung1', 'yujung2', 'yujung3'],
	};

	// private 변수를 반환해줌
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
}

module.exports = UserStorage;