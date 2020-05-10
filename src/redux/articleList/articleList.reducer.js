import articlesTypes from './articleList.types';
import { favoriteArticleListUpdate } from './favoriteArticlesListUpdate';

const initialState = {
	isFetchingArticles: false,
	articlesCount: null,
	articleList: null,
	inProgress: false,
	error: null
};

export default function articlesReducer(state = initialState, action) {
	switch (action.type) {
		case articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_REQUEST:
		case articlesTypes.FETCH_ARTICLES_BY_TAG_REQUEST:
		case articlesTypes.FETCH_ARTICLES_BY_AUTHOR_REQUEST:
		case articlesTypes.FETCH_FAVORITE_ARTICLES_REQUEST:
			return { ...state, isFetchingArticles: true };

		case articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_DONE:
		case articlesTypes.FETCH_ARTICLES_BY_TAG_DONE:
		case articlesTypes.FETCH_ARTICLES_BY_AUTHOR_DONE:
		case articlesTypes.FETCH_FAVORITE_ARTICLES_DONE:
			return {
				...state,
				articleList: action.payload.articleList,
				isFetchingArticles: false,
				articlesCount: action.payload.articlesCount
			};

		case articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_ERROR:
		case articlesTypes.FETCH_ARTICLES_BY_TAG_ERROR:
		case articlesTypes.FETCH_ARTICLES_BY_AUTHOR_ERROR:
		case articlesTypes.FETCH_FAVORITE_ARTICLES_ERROR:
			return { ...state, error: action.payload.error, isFetchingArticles: false };

		case articlesTypes.FAVORITE_ARTICLE_REQUEST:
		case articlesTypes.UNFAVORITE_ARTICLE_REQUEST:
			return { ...state, inProgress: true };

		case articlesTypes.ADD_ARTICLE_TO_FAVORITES_DONE:
		case articlesTypes.REMOVE_ARTICLE_FROM_FAVORITES_DONE:
			return {
				...state,
				articleList: favoriteArticleListUpdate(
					state.articleList,
					action.payload.articleSlug,
					action.payload.isFavorited,
					action.payload.favoritesCount
				),
				inProgress: false
			};

		case articlesTypes.FAVORITE_ARTICLE_ERROR:
		case articlesTypes.UNFAVORITE_ARTICLE_ERROR:
			return { ...state, error: action.payload.error, inProgress: false };

		case articlesTypes.UNLOAD_ARTICLES:
			return { ...state, articleList: null, error: null };

		case articlesTypes.CLEAR_ARTICLES_ERROR:
			return { ...state, error: null };

		default:
			return state;
	}
}
