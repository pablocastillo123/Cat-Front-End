import React from 'react';
import { Tabs, Layout, Row, Button } from 'antd';
import CatList from '../components/CatList';
import CatListCategory from '../components/CatListCategory';
import { logOut } from '../services/login';

const { TabPane } = Tabs;
const { Content, Header } = Layout;

export default function home() {
	return (
		<div>
			<Layout>
				<Header>
					<Button type='link' onClick={logOut}>
						LogOut
					</Button>
				</Header>
				<Content>
					<Tabs defaultActiveKey='1' centered>
						<TabPane tab='Home' key='1'>
							<Row justify='center'>
								<CatList />
							</Row>
						</TabPane>
						<TabPane tab='By Category' key='2'>
							<Row justify='center' gutter={4}>
								<CatListCategory />
							</Row>
						</TabPane>
					</Tabs>
				</Content>
			</Layout>
		</div>
	);
}
