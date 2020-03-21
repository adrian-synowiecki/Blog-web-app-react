import commonTypes from './common.types';

export const setCurrentPageNumber = (currentPageNumber) => ({
	type: commonTypes.SET_CURRENT_PAGE_NUMBER,
	payload: { currentPageNumber }
});

export const setCurrentPageNumberToFirst = () => ({
	type: commonTypes.SET_CURRENT_PAGE_NUMBER_TO_FIRST
})