import { CHANGE_TAB, TRY_OUT } from '../Types/ChangingRoomType';

export const tryOutAction = (clothType, imgSrc_png) => ({
	type: TRY_OUT,
	clothType,
	imgSrc_png,
});

export const changeTabAction = (tabName) => ({
	type: CHANGE_TAB,
	tabName,
});
