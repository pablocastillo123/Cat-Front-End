import { useEffect, useState } from 'react';
import { getCatByCategory } from '../services/CatRequest';

export default function useCatCategory() {
	const [catList, setCatList] = useState([]);
	const [categoryList, setCategoryList] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		getCatByCategory()
			.then((res) => {
				setCatList(res.cats);
            setCategoryList(res.category);
			})
			.finally(setLoading(false));
	}, []);

	return { isLoading, catList, categoryList };
}
