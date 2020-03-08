import singleArticleTypes from '../types/singleArticle';

const initialState = {
	inProgress: false,
	singleArticleData: {},
	error: ''
};

export default function singleArticleReducer(state = initialState, action) {
	switch (action.type) {
		case singleArticleTypes.FETCH_SINGLE_ARTICLE_REQUEST:
			return { ...state, inProgress: true };
		case singleArticleTypes.FETCH_SINGLE_ARTICLE_DONE:
			return { ...state, singleArticleData: { ...action.payload.singleArticleData }, inProgress: false };
		case singleArticleTypes.FETCH_SINGLE_ARTICLE_ERROR:
			return { ...state, error: action.payload.error, inProgress: false };

		case singleArticleTypes.CREATE_SINGLE_ARTICLE_REQUEST:
			return { ...state, inProgress: true };
		case singleArticleTypes.CREATE_SINGLE_ARTICLE_DONE:
			return { ...state, inProgress: false };
		case singleArticleTypes.CREATE_SINGLE_ARTICLE_ERROR:
			return { ...state, error: action.payload.error, inProgress: false };

		case singleArticleTypes.UPDATE_SINGLE_ARTICLE_REQUEST:
			return { ...state, inProgress: true };
		case singleArticleTypes.UPDATE_SINGLE_ARTICLE_DONE:
			return { ...state, inProgress: false };
		case singleArticleTypes.UPDATE_SINGLE_ARTICLE_ERROR:
			return { ...state, error: action.payload.error, inProgress: false };

		case singleArticleTypes.DELETE_SINGLE_ARTICLE_REQUEST:
			return { ...state, inProgress: true };
		case singleArticleTypes.DELETE_SINGLE_ARTICLE_DONE:
			return { ...state, inProgress: false };
		case singleArticleTypes.UPDATE_SINGLE_ARTICLE_ERROR:
			return { ...state, error: action.payload.error, inProgress: false };

		case singleArticleTypes.UNLOAD_SINGLE_ARTICLE:
			return { ...state, singleArticleData: {} };
		default:
			return state;
	}
}
