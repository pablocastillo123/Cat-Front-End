import React from 'react';
import { Tabs, Layout, Select, Row, Col } from 'antd';
import CatList from '../components/CatList';
const { TabPane } = Tabs;
const { Content } = Layout;
const { Option } = Select;

export default function home() {
	return (
		<div>
			<Layout>
				<Content>
					<Tabs defaultActiveKey='1' centered>
						<TabPane tab='Home' key='1'>
							<Row justify='center'>
								<CatList />
							</Row>
						</TabPane>
						<TabPane tab='Por Categoria' key='2'>
						<Row justify='center' gutter={4}>
								<Col
									lg={{ span: 6 }}
									sm={{ span: 10 }}
									xs={{ span: 8 }}>
									<h4>Categoria</h4>
									<Select style={{ width: '100%' }}>
										<Option value='cat 1'>Cat 1</Option>
										<Option value='cat 2'>Cat 2</Option>
										<Option value='cat 3'>Cat 3</Option>
									</Select>
								</Col>
							</Row>
						</TabPane>
					</Tabs>
				</Content>
			</Layout>
		</div>
	);
}
