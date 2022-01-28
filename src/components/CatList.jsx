import React, { useEffect, useState } from 'react';
import { List, Row, message } from 'antd';
import { getCat } from '../services/CatRequest';
import Cat from './Cat';

export default function CatList() {
	useEffect(() => {
		setLoading(true);
		getCat()
		.then((res) => {
			setCatList(res);
			setLoading(false);
		})
		.catch(error => message.error('Error al obtener la data. Intente mas tarde...'))
		.finally(setLoading(false))
	}, []);

	const [catList, setCatList] = useState();
	const [loading, setLoading] = useState();

	return (
		<div>
			<List
				grid={{
					gutter: 0,
					xs: 1,
					sm: 2,
					md: 3,
					lg: 3,
					xl: 3,
					xxl: 3
				}}
				loading={loading}
				dataSource={catList}
				renderItem={(cat) => (
					<List.Item key={cat.id}>
						<Row justify='center'>
							<Cat data={cat} />
						</Row>
					</List.Item>
				)}
			/>
		</div>
	);
}
