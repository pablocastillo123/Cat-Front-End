import React, { useState } from 'react';
import { Row, Spin, Button } from 'antd';
import Cat from './Cat';
import useCat from './../hooks/useCat';
import './CatList.css';

export default function CatList() {
	const { isLoading, catList } = useCat();
	const [currentPage, setCurrentPage] = useState(0);

	const LIST_ITEM = 6;
	const filterPage = () => {
		return catList.slice(currentPage, currentPage + LIST_ITEM);
	};

	const nextPage = () => {
		if (catList.length > currentPage + LIST_ITEM) {
			setCurrentPage(currentPage + LIST_ITEM);
		}
	};

	const prevPage = () => {
		console.log(currentPage);
		if (currentPage > 0) setCurrentPage(currentPage - LIST_ITEM);
	};

	return (
		<div>
			<Spin tip={'Cargando...'} spinning={isLoading} delay={500} size='large'>
				<Row justify='space-around'>
					<Button onClick={prevPage}>Anterior</Button>
					<Button onClick={nextPage}>Siguente</Button>
				</Row>
				<Row>
					<div className='grid-container'>
						{filterPage().map((cat) => {
							return <Cat key={cat.id} loading={true} data={cat} />;
						})}
					</div>
				</Row>
			</Spin>
		</div>
	);
}
