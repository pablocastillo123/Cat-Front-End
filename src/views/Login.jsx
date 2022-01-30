import React from 'react';
import { Row, Button, Divider } from 'antd';
import { googleLogin } from '../services/login';
import { GoogleOutlined } from '@ant-design/icons';
import './Login.css';

export default function Login() {
	return (
		<div>
			<div className='ContainerLogin'>
				<Row justify='center' align='center'>
					<Divider>Login</Divider>
					<Button
						onClick={googleLogin}
						type='primary'
						icon={<GoogleOutlined />}
						size={'large'}>
						Login with google
					</Button>
				</Row>
			</div>
		</div>
	);
}
