import articlesTypes from './articleList.types'
import { favoriteArticlesListUpdate } from '../../utils/favoriteArticlesListUpdate';

const initialState = {
	inProgress: false,
	articleList: [],
	error: null
	/* 	userArticlesCount: null */
};



export default function articlesReducer(state = initialState, action) {
	switch (action.type) {
		case articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_REQUEST:
		case articlesTypes.FETCH_ARTICLES_BY_TAG_REQUEST:
		case articlesTypes.FETCH_ARTICLES_BY_AUTHOR_REQUEST:
		case articlesTypes.FETCH_FAVORITE_ARTICLES_REQUEST:
			return { ...state, inProgress: true };

		case articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_DONE:
		case articlesTypes.FETCH_ARTICLES_BY_TAG_DONE:
		case articlesTypes.FETCH_ARTICLES_BY_AUTHOR_DONE:
		case articlesTypes.FETCH_FAVORITE_ARTICLES_DONE:
			return {
				...state,
				articleList: action.payload.articleList,
				inProgress: false
				/* 	userArticlesCount: action.payload.articlesCount */
			};

		case articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_ERROR:
		case articlesTypes.FETCH_ARTICLES_BY_TAG_ERROR:
		case articlesTypes.FETCH_ARTICLES_BY_AUTHOR_ERROR:
		case articlesTypes.FETCH_FAVORITE_ARTICLES_ERROR:
			return { ...state, error: action.payload.error, inProgress: false };

		case articlesTypes.FAVORITE_ARTICLE_REQUEST:
		case articlesTypes.UNFAVORITE_ARTICLE_REQUEST:
			return { ...state, inProgress: true };

		case articlesTypes.ADD_ARTICLE_TO_FAVORITES_DONE:
		case articlesTypes.REMOVE_ARTICLE_FROM_FAVORITES_DONE:
			return {
				...state,
				articleList: favoriteArticlesListUpdate(state.articleList, action.payload.changedArticleData),
				inProgress: false
			};

		case articlesTypes.FAVORITE_ARTICLE_ERROR:
		case articlesTypes.UNFAVORITE_ARTICLE_ERROR:
			return { ...state, inProgress: false };

		case articlesTypes.UNLOAD_ARTICLES:
			return { ...state, articleList: [], inProgress: false, error: null };
		default:
			return state;
	}
}
