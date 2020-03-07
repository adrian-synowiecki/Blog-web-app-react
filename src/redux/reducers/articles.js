import articlesTypes from '../types/articles';
import { favoriteArticlesListUpdateUtil } from '../modules/utils/favoriteArticles.utils';

const initialState = {
	isFetchingArticlesList: false,
	articlesList: [],
	articlesListError: '',
	userArticlesCount: null
};

export default function articlesDataReducer(state = initialState, action) {
	switch (action.type) {
		case articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_REQUESTED:
		case articlesTypes.FETCH_ARTICLES_BY_TAG_REQUESTED:
		case articlesTypes.FETCH_ARTICLES_BY_AUTHOR_REQUESTED:
		case articlesTypes.FETCH_FAVORITE_ARTICLES_REQUESTED:
			return { ...state, isFetchingArticlesList: true };
		case articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_DONE:
		case articlesTypes.FETCH_ARTICLES_BY_TAG_DONE:
		case articlesTypes.FETCH_ARTICLES_BY_AUTHOR_DONE:
		case articlesTypes.FETCH_FAVORITE_ARTICLES_DONE:
			return {
				...state,
				articlesList: [ ...action.payload ],
				isFetchingArticlesList: false,
				userArticlesCount: action.payload.articlesCount
			};
		case articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_FAILURE:
		case articlesTypes.FETCH_ARTICLES_BY_TAG_FAILURE:
		case articlesTypes.FETCH_ARTICLES_BY_AUTHOR_FAILURE:
		case articlesTypes.FETCH_FAVORITE_ARTICLES_FAILURE:
			return { ...state, articlesListError: action.payload, isFetchingArticlesList: false };

		/* case articlesTypes.FETCH_ARTICLES_BY_AUTHOR_DONE:
			return { ...state, articlesList: action.payload, userArticlesCount: action.payload.articlesCount }; */

		/* 	case articlesTypes.FETCH_ARTICLES_BY_TAG_REQUESTED: 
			return {  ...state,  isLoadingArticlesByTag: true };
		 		case articlesTypes.FETCH_ARTICLES_BY_TAG_DONE:
			return {  ...state,  articlesByTag: [ ...action.payload.articles ], isLoadingArticlesByTag: false };  */

		case articlesTypes.UNLOAD_ARTICLES:
			return { ...state, articlesList: [] };
		case articlesTypes.ARTICLE_FAVORITED_DONE:
		case articlesTypes.ARTICLE_UNFAVORITED_DONE:
			/* return {
				...state,
				articlesData: favoriteArticlesListUpdateUtil(state.articlesData, action.payload.article),
				favoriteArticlesList: favoriteArticlesListUpdateUtil(state.favoriteArticlesList, action.payload.article)
			}; */
			return {
				...state,
				articlesList: favoriteArticlesListUpdateUtil(state.articlesList, action.payload.article)
			};
		default:
			return state;
	}
}
