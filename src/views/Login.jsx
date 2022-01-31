import React from 'react';
import { Button, Divider } from 'antd';
import { googleLogin, gitHubLogin } from '../services/login';
import { GoogleOutlined, GithubOutlined } from '@ant-design/icons';
import './Login.css';

export default function Login() {
	return (
		<div>
			<div className='ContainerLogin'>
				<Divider>Login</Divider>
				<div className='ContainerloginBtn'>
					<Button
						className='btnGoogle'
						onClick={googleLogin}
						icon={<GoogleOutlined />}
						size={'large'}>
						Login with google
					</Button>
					<Button
						className='btnGithub'
						onClick={gitHubLogin}
						icon={<GithubOutlined />}
						size={'large'}>
						Login with gitHub
					</Button>
				</div>
			</div>
		</div>
	);
}
