const getCat = () => {
	const url = 'http://localhost:4000/cat/getCat';
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
		.catch((error) => error);
};

export { getCat };
