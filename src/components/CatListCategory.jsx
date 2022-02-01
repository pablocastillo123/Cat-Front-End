import React, { useState } from 'react';
import { Row, Col, Spin, Button, Select } from 'antd';
import Cat from './Cat';
import useCatCategory from './../hooks/useCatCategory';
import './CatList.css';
const { Option } = Select;

export default function CatListCategory() {
	const { isLoading, catList, categoryList } = useCatCategory();
	const [currentPage, setCurrentPage] = useState(0);
	const [selectCategory, setSelectCategory] = useState('');

	const LIST_ITEM = 6;

	const filterPage = () => {
		if (selectCategory === '')
			return catList.slice(currentPage, currentPage + LIST_ITEM);

		return filterCatByCategory().slice(currentPage, currentPage + LIST_ITEM);
	};

	const nextPage = () => {
		if (filterCatByCategory().length > currentPage + LIST_ITEM) {
			setCurrentPage(currentPage + LIST_ITEM);
		}
	};

	const prevPage = () => {
		if (currentPage > 0) setCurrentPage(currentPage - LIST_ITEM);
	};

	const onChangeCategory = (value, option) => {
		setCurrentPage(0);
		setSelectCategory(value);
	};

	const filterCatByCategory = () => {
		return catList.filter((cat) => {
			return cat.categories.name === selectCategory;
		});
	};

	return (
		<div>
			<Spin tip={'Cargando...'} spinning={isLoading} delay={500} size='large'>
				<Row justify='center'>
					<Col>
						<div className='container-btn'>
							<Button onClick={prevPage}>Previous</Button>
							<Button onClick={nextPage}>Next</Button>
						</div>
						<h4>Category</h4>
						<Select
							className='selectCategory'
							onChange={onChangeCategory}>
							{categoryList &&
								categoryList.map((category) => {
									return (
										<Option
											key={category.id}
											value={category.name}>
											{category.name}
										</Option>
									);
								})}
						</Select>
					</Col>
				</Row>
				<Row justify='center'>
					<div className='grid-container'>
						{catList &&
							filterPage().map((cat) => {
								return (
									<Cat key={cat._id} loading={true} data={cat} />
								);
							})}
					</div>
				</Row>
			</Spin>
		</div>
	);
}
