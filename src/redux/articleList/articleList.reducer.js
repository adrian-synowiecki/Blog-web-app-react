import articlesTypes from './articleList.types';

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
			const { payload: { articleList, articlesCount } } = action;
			return {
				...state,
				articleList: articleList,
				isFetchingArticles: false,
				articlesCount: articlesCount
			};

		case articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_ERROR:
		case articlesTypes.FETCH_ARTICLES_BY_TAG_ERROR:
		case articlesTypes.FETCH_ARTICLES_BY_AUTHOR_ERROR:
		case articlesTypes.FETCH_FAVORITE_ARTICLES_ERROR:
			return { ...state, error: action.payload.error, isFetchingArticles: false };

		case articlesTypes.UPDATE_FAVORITE_ARTICLES_REQUEST:
			return { ...state, inProgress: true };

		case articlesTypes.UPDATE_FAVORITE_ARTICLES_DONE:
			const { payload: { articleSlug, isFavoritedModified, favoritesCountModified } } = action;
			return {
				...state,
				articleList: state.articleList.map((articleData) => {
					if (articleData.slug === articleSlug) {
						return {
							...articleData,
							favorited: isFavoritedModified,
							favoritesCount: favoritesCountModified
						};
					}
					return articleData;
				}),
				inProgress: false
			};

		case articlesTypes.UPDATE_FAVORITE_ARTICLES_ERROR:
			return { ...state, error: action.payload.error, inProgress: false };

		case articlesTypes.UNLOAD_ARTICLES:
			return { ...state, articleList: null, error: null };

		case articlesTypes.CLEAR_ARTICLES_ERROR:
			return { ...state, error: null };

		default:
			return state;
	}
}
