"use strict";

const id = document.querySelector('#id');
const password = document.querySelector('#password');
const loginBTN = document.querySelector('button');

loginBTN.addEventListener('click', () => {
	// get req
	const req = {
		id: id.value,
		password: password.value
	}

	// 서버에 req 전달, fetch(경로, 전달하는 데이터)
	fetch('/login', {
		method: 'POST', // body를 통해 보낼때는 http 메서드 중에서 POST 메서드로 전달
		headers: {
			"Content-Type": "application/json", // 전달하는 데이터 타입 = json
		},
		body: JSON.stringify(req),
	})
	// 서버에서 응답한 데이터 받기
	.then((res) => res.json()) // 반환값 전달
	.then((res) => {
		if(res.success) {
			location.href = '/'; // 이동
		}
		else {
			alert(res.msg);
		}
	})
	.catch((err) => {
		console.error(new Error('Error to login'));
	})
})