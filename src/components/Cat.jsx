import React from 'react';
import { Image } from 'antd';

export default function Cat(props) {
	const {
		data: { url }
	} = props;
	return (
		<>
			<Image width={200} height={200} src={url} />
		</>
	);
}
