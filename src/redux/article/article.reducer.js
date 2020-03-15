import articleTypes from './article.types';

const initialState = {
	inProgress: false,
	articleData: {},
	error: null
};

export default function articleReducer(state = initialState, action) {
	switch (action.type) {
		case articleTypes.FETCH_ARTICLE_REQUEST:
			return { ...state, inProgress: true };
		case articleTypes.FETCH_ARTICLE_DONE:
			return { ...state, articleData: { ...action.payload.articleData }, inProgress: false };
		case articleTypes.FETCH_ARTICLE_ERROR:
			return { ...state, error: action.payload.error, inProgress: false };

		case articleTypes.CREATE_ARTICLE_REQUEST:
			return { ...state, inProgress: true };
		case articleTypes.CREATE_ARTICLE_DONE:
			return { ...state, inProgress: false };
		case articleTypes.CREATE_ARTICLE_ERROR:
			return { ...state, error: action.payload.error, inProgress: false };

		case articleTypes.UPDATE_ARTICLE_REQUEST:
			return { ...state, inProgress: true };
		case articleTypes.UPDATE_ARTICLE_DONE:
			return { ...state, inProgress: false };
		case articleTypes.UPDATE_ARTICLE_ERROR:
			return { ...state, error: action.payload.error, inProgress: false };

		case articleTypes.DELETE_ARTICLE_REQUEST:
			return { ...state, inProgress: true };
		case articleTypes.DELETE_ARTICLE_DONE:
			return { ...state, inProgress: false };
		case articleTypes.UPDATE_ARTICLE_ERROR:
			return { ...state, error: action.payload.error, inProgress: false };

		case articleTypes.UNLOAD_ARTICLE:
			return { ...state, articleData: {} };
		default:
			return state;
	}
}
