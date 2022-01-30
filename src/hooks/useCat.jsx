import { useEffect, useState } from 'react';
import { getCat } from '../services/CatRequest';

export default function useCat() {
	const [catList, setCatList] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		getCat()
			.then((res) => {
				setCatList(res.data);
			})
			.finally(setLoading(false));
	}, []);

	return { isLoading, catList };
}
