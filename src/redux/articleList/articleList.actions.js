import articlesTypes from './articleList.types';

// fetch articles by most recent
export const fetchArticlesByMostRecentRequest = (offSet) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_REQUEST,
	offSet
});
export const fetchArticlesByMostRecentDone = (articleList, articlesCount) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_DONE,
	payload: { articleList, articlesCount }
});
export const fetchArticlesByMostRecentError = (error) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_ERROR,
	payload: { error }
});

// fetch favorite articles
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

// fetch articles by author
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

// fetch articles by tag
export const fetchArticlesByTagRequest = (tag, offSet) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_TAG_REQUEST,
	tag,
	offSet
});
export const fetchArticlesByTagDone = (articleList, articlesCount) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_TAG_DONE,
	payload: { articleList, articlesCount }
});
export const fetchArticlesByTagError = (error) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_TAG_ERROR,
	payload: { error }
});

// add article to favorites
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

// remove article from favorites
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

export const clearArticlesError = () => ({
	type: articlesTypes.CLEAR_ARTICLES_ERROR
});
