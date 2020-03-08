import singleArticleTypes from '../types/singleArticle';

/* fetching article */
export const fetchSingleArticleRequest = (slug) => ({
	type: singleArticleTypes.FETCH_SINGLE_ARTICLE_REQUEST,
	slug
});
export const fetchSingleArticleDone = (singleArticleData) => ({
	type: singleArticleTypes.FETCH_SINGLE_ARTICLE_DONE,
	payload: { singleArticleData }
});
export const fetcSingleArticleError = (error) => ({
	type: singleArticleTypes.FETCH_SINGLE_ARTICLE_ERROR,
	payload: error
});

/* creating article */
export const createSingleArticleRequest = (singleArticleCreationData) => ({
	type: singleArticleTypes.CREATE_SINGLE_ARTICLE_REQUEST,
	singleArticleCreationData
});
export const createSingleArticleDone = () => ({
	type: singleArticleTypes.CREATE_SINGLE_ARTICLE_DONE
});
export const createSingleArticleError = (error) => ({
	type: singleArticleTypes.CREATE_SINGLE_ARTICLE_ERROR,
	payload: { error }
});

/* updating article */
export const updateSingleArticleRequest = (slug, singleArticleCreationData) => ({
	type: singleArticleTypes.UPDATE_SINGLE_ARTICLE_REQUEST,
	slug,
	singleArticleCreationData
});
export const updateSingleArticleDone = () => ({
	type: singleArticleTypes.UPDATE_SINGLE_ARTICLE_DONE
});
export const updateSingleArticleError = (error) => ({
	type: singleArticleTypes.UPDATE_SINGLE_ARTICLE_ERROR,
	payload: { error }
});

/* deleting article */
export const deleteSingleArticleRequest = (slug) => ({
	type: singleArticleTypes.DELETE_SINGLE_ARTICLE_REQUEST,
	slug
});
export const deleteSingleArticleDone = () => ({
	type: singleArticleTypes.DELETE_SINGLE_ARTICLE_DONE
});
export const deleteSingleArticleError = (error) => ({
	type: singleArticleTypes.DELETE_SINGLE_ARTICLE_ERROR,
	payload: { error }
});

/* unloading article */
export const unloadSingleArticle = () => ({
	type: singleArticleTypes.UNLOAD_SINGLE_ARTICLE
});
