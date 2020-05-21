import commonTypes from './common.types';

export const setOffSet = (offSet) => ({
	type: commonTypes.SET_OFF_SET,
	payload: { offSet }
});

export const toggleArticleSnackbar = (isOpenArticleSnackbar) => ({
	type: commonTypes.TOGGLE_ARTICLE_SNACKBAR,
	payload: { isOpenArticleSnackbar }
});

export const toggleCommentDialog = (dialogID) => ({
	type: commonTypes.TOGGLE_COMMENT_DIALOG,
	payload: { dialogID }
});

export const toggleArticleDialog = (isOpenArticleDialog) => ({
	type: commonTypes.TOGGLE_ARTICLE_DIALOG,
	payload: { isOpenArticleDialog }
});
