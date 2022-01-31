import { useEffect, useState } from 'react';
import { getCatByCategory } from '../services/CatRequest';
import { message } from 'antd';

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
			.catch(error => message.error('Error al obtener datos, intente mas tarde...'))
			.finally(setLoading(false));
	}, []);

	return { isLoading, catList, categoryList };
}
