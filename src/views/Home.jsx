import React from 'react';
import { Tabs, Layout } from 'antd';
import CatList from '../components/CatList';
const { TabPane } = Tabs;
const { Content } = Layout;

export default function home() {
	return (
		<>
			<Layout>
				<Content>
					<Tabs defaultActiveKey='1' centered>
						<TabPane tab='Home' key='1'>
							<CatList />
						</TabPane>
						<TabPane tab='Tab 2' key='2'>
							Tab 2
						</TabPane>
					</Tabs>
				</Content>
			</Layout>
		</>
	);
}
