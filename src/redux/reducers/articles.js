import articlesTypes from '../types/articles';
import { favoriteArticlesListUpdateUtil } from '../modules/utils/favoriteArticles.utils';

const initialState = {
	inProgress: false,
	articlesList: [],
	error: ''
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
				articlesList: [ ...action.payload.articlesList ],
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

		case articlesTypes.ARTICLE_FAVORITED_DONE:
		case articlesTypes.ARTICLE_UNFAVORITED_DONE:
			return {
				...state,
				articlesList: favoriteArticlesListUpdateUtil(state.articlesList, action.payload.article),
				inProgress: false
			};

		case articlesTypes.FAVORITE_ARTICLE_ERROR:
		case articlesTypes.UNFAVORITE_ARTICLE_ERROR:
			return { ...state, inProgress: false };

		case articlesTypes.UNLOAD_ARTICLES:
			return { ...state, articlesList: [] };
		default:
			return state;
	}
}
