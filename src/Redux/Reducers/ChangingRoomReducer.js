import { CHANGE_TAB, TRY_OUT } from '../Types/ChangingRoomType';

const initialState = {
	outfit: [
		{
			clothType: 'hairstyle',
			imgSrc_png: './images/hairstyle/hairstyle3.png',
		},
		{
			clothType: 'necklaces',
			imgSrc_png: './images/necklaces/necklace2.png',
		},
		{
			clothType: 'topclothes',
			imgSrc_png: './images/clothes/topcloth6.png',
		},
		{
			clothType: 'botclothes',
			imgSrc_png: './images/clothes/botcloth1.png',
		},
		{ clothType: 'handbags', imgSrc_png: './images/handbags/handbag3.png' },
		{ clothType: 'shoes', imgSrc_png: './images/shoes/shoes1.png' },
		{
			clothType: 'background',
			imgSrc_png: './images/background/background1.jpg',
		},
	],
	tabName: 'tabTopClothes',
};

const ChangingRoomReducer = (state = initialState, action) => {
	switch (action.type) {
		case TRY_OUT: {
			let updateOutfit = [...state.outfit];
			let updateIndex = updateOutfit.findIndex(
				(item) => item.clothType === action.clothType,
			);
			if (updateIndex !== -1) {
				updateOutfit[updateIndex].imgSrc_png = action.imgSrc_png;
			}
			state.outfit = updateOutfit;
			return { ...state };
		}
		case CHANGE_TAB: {
			state.tabName = action.tabName;
			return {...state}
		}
		default:
			return state;
	}
};

export default ChangingRoomReducer;
