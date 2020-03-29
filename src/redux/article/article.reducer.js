import articleTypes from './article.types';

const initialState = {
	isFetchingArticle: false,
	inProgress: false,
	articleData: {},
	error: null
};

export default function articleReducer(state = initialState, action) {
	switch (action.type) {
		case articleTypes.FETCH_ARTICLE_REQUEST:
			return { ...state, isFetchingArticle: true };
		case articleTypes.DELETE_ARTICLE_REQUEST:
			return { ...state, inProgress: true };

		case articleTypes.FETCH_ARTICLE_DONE:
			return { ...state, articleData: action.payload.articleData, isFetchingArticle: false };
		case articleTypes.DELETE_ARTICLE_DONE:
			return { ...state, inProgress: false };

		case articleTypes.FETCH_ARTICLE_ERROR:
			return { ...state, error: action.payload.error, isFetchingArticle: false };
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
