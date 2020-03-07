import singleArticleTypes from '../types/singleArticle';

const initialState = {
	isFetchingArticleContent: false,
	articleContent: {},
	articleContentError: ''
};

export default function singleArticleReducer(state = initialState, action) {
	switch (action.type) {
		case singleArticleTypes.FETCH_ARTICLE_REQUESTED:
			return { ...state, isFetchingArticleContent: true };
		case singleArticleTypes.FETCH_ARTICLE_DONE:
			return { ...state, articleContent: { ...action.payload }, isFetchingArticleContent: false };
		case singleArticleTypes.FETCH_ARTICLE_ERROR:
			return { ...state, articleContentError: action.payload, isFetchingArticleContent: false };
		case singleArticleTypes.UNLOAD_ARTICLE:
			return { ...state, articleContent: {} };
		default:
			return state;
	}
}
