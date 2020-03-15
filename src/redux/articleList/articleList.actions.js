import articlesTypes from './articleList.types'

export const fetchArticlesByMostRecentRequest = (offSet) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_REQUEST,
	offSet
});

export const fetchArticlesByMostRecentDone = (articleList) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_DONE,
	payload: { articleList }
});

export const fetchArticlesByMostRecentError = (error) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_ERROR,
	payload: { error }
});

export const fetchFavoriteArticlesRequest = (username) => ({
	type: articlesTypes.FETCH_FAVORITE_ARTICLES_REQUEST,
	username
});

export const fetchFavoriteArticlesDone = (articleList) => ({
	type: articlesTypes.FETCH_FAVORITE_ARTICLES_DONE,
	payload: { articleList }
});

export const fetchFavoriteArticlesError = (error) => ({
	type: articlesTypes.FETCH_FAVORITE_ARTICLES_ERROR,
	payload: { error }
});

export const fetchArticlesByAuthorRequest = (username) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_AUTHOR_REQUEST,
	username
});

export const fetchArticlesByAuthorDone = (articleList) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_AUTHOR_DONE,
	payload: { articleList }
});

export const fetchArticlesByAuthorError = (error) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_AUTHOR_ERROR,
	payload: { error }
});

export const fetchArticlesByTagRequest = (tag) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_TAG_REQUEST,
	tag
});

export const fetchArticlesByTagDone = (articleList) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_TAG_DONE,
	payload: { articleList }
});

export const fetchArticlesByTagError = (error) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_TAG_ERROR,
	payload: { error }
});

export const addArticleToFavoritesRequest = (articleSlug) => ({
	type: articlesTypes.ADD_ARTICLE_TO_FAVORITES_REQUEST,
	articleSlug
});

export const addArticleToFavoritesDone = (changedArticleData) => ({
	type: articlesTypes.ADD_ARTICLE_TO_FAVORITES_DONE,
	payload: { changedArticleData }
});

export const addArticleToFavoritesError = (error) => ({
	type: articlesTypes.ADD_ARTICLE_TO_FAVORITES_ERROR,
	payload: { error }
});

export const removeArticleFromFavoritesRequest = (articleSlug) => ({
	type: articlesTypes.REMOVE_ARTICLE_FROM_FAVORITES_REQUEST,
	articleSlug
});

export const removeArticleFromFavoritesDone = (changedArticleData) => ({
	type: articlesTypes.REMOVE_ARTICLE_FROM_FAVORITES_DONE,
	payload: { changedArticleData }
});

export const removeArticleFromFavoritesError = (error) => ({
	type: articlesTypes.REMOVE_ARTICLE_FROM_FAVORITES_ERROR,
	payload: { error }
});

export const unloadArticles = () => ({
	type: articlesTypes.UNLOAD_ARTICLES
});
