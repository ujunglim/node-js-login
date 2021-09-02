"use strict";

const id = document.querySelector('#id');
const password = document.querySelector('#password');
const loginBTN = document.querySelector('button');

loginBTN.addEventListener('click', () => {
	const req = {
		id: id.value,
		password: password.value
	}
})