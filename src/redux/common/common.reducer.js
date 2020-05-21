import commonTypes from './common.types';

const initialState = {
	offSet: null,
	isOpenArticleSnackbar: false,
	isOpenArticleDialog: false,
	dialogID: 0
};

export default (state = initialState, action) => {
	switch (action.type) {
		case commonTypes.SET_OFF_SET:
			return { ...state, offSet: action.payload.offSet };
		case commonTypes.TOGGLE_ARTICLE_SNACKBAR:
			return { ...state, isOpenArticleSnackbar: action.payload.isOpenArticleSnackbar };
		case commonTypes.TOGGLE_COMMENT_DIALOG:
			return { ...state, dialogID: action.payload.dialogID };
		case commonTypes.TOGGLE_ARTICLE_DIALOG:
			return { ...state, isOpenArticleDialog: action.payload.isOpenArticleDialog };
		default:
			return state;
	}
};
