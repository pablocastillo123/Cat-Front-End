import React, { useState } from 'react';
import { Spin, Button } from 'antd';
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
		if (currentPage > 0) setCurrentPage(currentPage - LIST_ITEM);
	};

	return (
		<div>
			<Spin tip={'Cargando...'} spinning={isLoading} delay={500} size='large'>
				<div className='container-btn'>
					<Button onClick={prevPage}>Previous</Button>
					<Button onClick={nextPage}>Next</Button>
				</div>
				<div className='grid-container'>
					{catList &&
						filterPage().map((cat) => {
							return <Cat key={cat.id} loading={true} data={cat} />;
						})}
				</div>
			</Spin>
		</div>
	);
}
