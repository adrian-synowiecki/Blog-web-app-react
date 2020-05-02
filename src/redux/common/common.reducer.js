import commonTypes from './common.types';

const initialState = {
	currentPageNumber: Number(window.localStorage.getItem('currentPageNumber') || '1'),
	offSet: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case commonTypes.SET_CURRENT_PAGE_NUMBER:
			return { currentPageNumber: action.payload.currentPageNumber };

		case commonTypes.SET_OFF_SET:
			return { ...state, offSet: action.offSet };
		default:
			return state;
	}
};
