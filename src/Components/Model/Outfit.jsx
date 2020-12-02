import React from 'react';
import { useSelector } from 'react-redux';
import {
	Necklace,
	HairStyle,
	ClothTop,
	Handbag,
	Feet,
	Background,
	ClothBottom,
} from './ModelStyle';

export default function Outfit(props) {
	const outfit = useSelector((state) => state.ChangingRoomReducer.outfit);

	return outfit.map((item, index) => {
		switch (item.clothType) {
			case 'hairstyle': {
				return (
					<HairStyle
						key={index}
						style={{
							background: `url('${item.imgSrc_png}')`,
						}}
					/>
				);
			}
			case 'necklaces': {
				return (
					<Necklace
						key={index}
						style={{
							background: `url('${item.imgSrc_png}')`,
						}}
					/>
				);
			}
			case 'topclothes': {
				return (
					<ClothTop
						key={index}
						style={{
							background: `url('${item.imgSrc_png}')`,
						}}
					/>
				);
			}
			case 'botclothes': {
				return (
					<ClothBottom
						key={index}
						style={{
							background: `url('${item.imgSrc_png}')`,
						}}
					/>
				);
			}
			case 'handbags': {
				return (
					<Handbag
						key={index}
						style={{
							background: `url('${item.imgSrc_png}')`,
						}}
					/>
				);
			}
			case 'shoes': {
				return (
					<Feet
						key={index}
						style={{
							background: `url('${item.imgSrc_png}')`,
						}}
					/>
				);
			}
			default: {
				return <Background key={index} src={item.imgSrc_png} />;
			}
		}
	});
}
