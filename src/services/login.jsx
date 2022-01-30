const googleLogin = () => {
	window.open('http://localhost:4000/auth/google','_self');
};

const getUser = ()=>{
	const url = '/getUser'
	const options = {
		method: 'GET',
	};
	return fetch(url, options)
		.then((res) => res.json())
		.catch((error) => error);
}

export { googleLogin };
