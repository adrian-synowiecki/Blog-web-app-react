import commonTypes from './common.types';

const initialState = {
	currentPageNumber: Number(window.localStorage.getItem('currentPageNumber') || '1')
};

export default (state = initialState, action) => {
	switch (action.type) {
		case commonTypes.SET_CURRENT_PAGE_NUMBER:
			return { currentPageNumber: action.payload.currentPageNumber };

		case commonTypes.SET_CURRENT_PAGE_NUMBER_TO_FIRST:
			return { currentPageNumber: 1 };
		default:
			return state;
	}
};
