import articleTypes from './article.types';

const initialState = {
	isFetchingArticleData: false,
	inProgress: false,
	articleData: {},
	error: null
};

export default function articleReducer(state = initialState, action) {
	switch (action.type) {
		case articleTypes.FETCH_ARTICLE_REQUEST:
			return { ...state, isFetchingArticleData: true };
		case articleTypes.DELETE_ARTICLE_REQUEST:
			return { ...state, inProgress: true };

		case articleTypes.FETCH_ARTICLE_DONE:
			return { ...state, articleData: action.payload.articleData, isFetchingArticleData: false };
		case articleTypes.DELETE_ARTICLE_DONE:
			return { ...state, articleData: {}, inProgress: false };

		case articleTypes.FETCH_ARTICLE_ERROR:
			return { ...state, error: action.payload.error, isFetchingArticleData: false };
		case articleTypes.CREATE_ARTICLE_ERROR:
		case articleTypes.UPDATE_ARTICLE_ERROR:
			return { ...state, error: action.payload.error };
		case articleTypes.DELETE_ARTICLE_ERROR:
			return { ...state, error: action.payload.error, inProgress: false };

		case articleTypes.UNLOAD_ARTICLE:
			return { ...state, articleData: {}, error: null };

		case articleTypes.CLEAR_ARTICLE_ERROR:
			return { ...state, error: null };

		default:
			return state;
	}
}
