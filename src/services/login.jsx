const googleLogin = () => {
	window.open('http://localhost:4000/auth/google', '_self');
};

const gitHubLogin = () => {
	window.open('http://localhost:4000/auth/gitHub', '_self');
};

const logOut = () => {
	const url = 'http://localhost:4000/auth/logout';
	const headers = {
		Accept: '*/*',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST',
		'Access-Control-Allow-Headers':
			'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
		'Access-Control-Allow-Credentials': 'true'
	};
	const options = {
		method: 'GET',
		headers
	};
	return fetch(url, options)
		.then((res) => res.json())
		.then((res) => {
			window.location.href = '/login';
		})
		.catch((error) => error);
};

export { googleLogin, gitHubLogin, logOut };
