import articleTypes from './article.types';

/* fetching article */
export const fetchArticleRequest = (articleSlug) => ({
	type: articleTypes.FETCH_ARTICLE_REQUEST,
	articleSlug
});
export const fetchArticleDone = (articleData) => ({
	type: articleTypes.FETCH_ARTICLE_DONE,
	payload: { articleData }
});
export const fetchArticleError = (error) => ({
	type: articleTypes.FETCH_ARTICLE_ERROR,
	payload: { error }
});

/* creating article */
export const createArticleRequest = (articleCreationData) => ({
	type: articleTypes.CREATE_ARTICLE_REQUEST,
	articleCreationData
});
export const createArticleDone = () => ({
	type: articleTypes.CREATE_ARTICLE_DONE
});
export const createArticleError = (error) => ({
	type: articleTypes.CREATE_ARTICLE_ERROR,
	payload: { error }
});

/* updating article */
export const updateArticleRequest = (articleSlug, articleCreationData) => ({
	type: articleTypes.UPDATE_ARTICLE_REQUEST,
	articleSlug,
	articleCreationData
});
export const updateArticleDone = () => ({
	type: articleTypes.UPDATE_ARTICLE_DONE
});
export const updateArticleError = (error) => ({
	type: articleTypes.UPDATE_ARTICLE_ERROR,
	payload: { error }
});

/* deleting article */
export const deleteArticleRequest = (articleSlug) => ({
	type: articleTypes.DELETE_ARTICLE_REQUEST,
	articleSlug
});
export const deleteArticleDone = () => ({
	type: articleTypes.DELETE_ARTICLE_DONE
});
export const deleteArticleError = (error) => ({
	type: articleTypes.DELETE_ARTICLE_ERROR,
	payload: { error }
});

/* unloading article */
export const unloadArticle = () => ({
	type: articleTypes.UNLOAD_ARTICLE
});