const apiKey = 'f6fb1744-bfb2-4515-b798-0731e85a246e';

const getCat = () => {
	const url = 'https://api.thecatapi.com/v1/images/search?';
	const query = 'size=full&order=random&limit=9&page=0&format=json&bread_id=true';
	const options = {
		method: 'GET',
		header: {
			'x-api-key': apiKey
		}
	};
	return fetch(url + query, options)
		.then((res) => res.json())
};

const getCategories = () => {
	const url = 'https://api.thecatapi.com/v1/categories';
	const options = {
		method: 'GET',
		header: {
			'x-api-key': apiKey
		}
	};
	return fetch(url, options).then((res) => res.json());
};

export { getCat, getCategories };
