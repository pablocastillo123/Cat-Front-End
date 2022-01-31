import { useEffect, useState } from 'react';
import { getCat } from '../services/CatRequest';
import { message } from 'antd';

export default function useCat() {
	const [catList, setCatList] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		getCat()
			.then((res) => {
				setCatList(res.data);
			})
			.catch(error => message.error('Error al obtener datos, intente mas tarde...'))
			.finally(setLoading(false));
	}, []);

	return { isLoading, catList };
}
