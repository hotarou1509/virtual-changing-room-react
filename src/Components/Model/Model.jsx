import React from 'react';
import {
	ModelFace,
	BikiniBottom,
	BikiniTop,
	Body,
	Contain,
} from './ModelStyle';
import Outfit from './Outfit';

export default function Model(props) {
	return (
		<Contain>
			<Body />
			<ModelFace />
			<BikiniTop />
			<BikiniBottom />
			<Outfit />
		</Contain>
	);
}
