import articlesTypes from '../types/articles';

export const fetchArticlesByMostRecentRequest = (offSet) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_REQUESTED,
	offSet
});
export const fetchArticlesByMostRecentDone = (articlesList) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_DONE,
	payload: { articlesList }
});
export const fetchArticlesByMostRecentFailure = (error) => {
	return {
		type: articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_FAILURE,
		payload: { error }
	};
};
export const fetchFavoriteArticlesRequest = (username) => ({
	type: articlesTypes.FETCH_FAVORITE_ARTICLES_REQUESTED,
	username
});

export const fetchFavoriteArticlesDone = (articlesList) => ({
	type: articlesTypes.FETCH_FAVORITE_ARTICLES_DONE,
	payload: { articlesList }
});

export const fetchFavoriteArticlesError = (error) => ({
	type: articlesTypes.FETCH_FAVORITE_ARTICLES_FAILURE,
	payload: { error }
});

export const fetchArticlesByAuthorRequest = (articleAuthorUsername) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_AUTHOR_REQUESTED,
	articleAuthorUsername
});

export const fetchArticlesByAuthorDone = (articlesList) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_AUTHOR_DONE,
	payload: { articlesList }
});

export const fetchArticlesByAuthorError = (error) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_AUTHOR_FAILURE,
	payload: { error }
});

export const fetchArticlesByTagRequest = (tag) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_TAG_REQUESTED,
	tag
});

export const fetchArticlesByTagDone = (articlesList) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_TAG_DONE,
	payload: { articlesList }
});

export const fetchArticlesByTagError = (error) => ({
	type: articlesTypes.FETCH_ARTICLES_BY_TAG_FAILURE,
	payload: { error }
});

export const articleFavoritedRequest = (slug) => ({
	type: articlesTypes.ARTICLE_FAVORITED_REQUESTED,
	slug
});

export const articleFavoritedDone = (article) => ({
	type: articlesTypes.ARTICLE_FAVORITED_DONE,
	payload: { article }
});

export const articleFavoritedError = (error) => ({
	type: articlesTypes.ARTICLE_FAVORITED_FAILURE,
	payload: { error }
});

export const unfavoriteArticleRequest = (slug) => ({
	type: articlesTypes.ARTICLE_UNFAVORITED_REQUESTED,
	slug
});

export const unfavoriteArticleDone = (article) => ({
	type: articlesTypes.ARTICLE_UNFAVORITED_DONE,
	payload: { article }
});

export const articleUnfavoritedError = (error) => ({
	type: articlesTypes.ARTICLE_UNFAVORITED_FAILURE,
	payload: { error }
});

export const unloadArticles = () => ({
	type: articlesTypes.UNLOAD_ARTICLES
});
