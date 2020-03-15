import commentsTypes from './comments.types'

export const addCommentToArticleRequest = (commentCreationData, articleSlug) => ({
	type: commentsTypes.ADD_COMMENT_TO_ARTICLE_REQUEST,
	commentCreationData,
	articleSlug
});

export const addCommentToArticleDone = (addedCommentData) => ({
	type: commentsTypes.ADD_COMMENT_TO_ARTICLE_DONE,
	payload: { addedCommentData }
});

export const addCommentToArticleError = (error) => ({
	type: commentsTypes.ADD_COMMENT_TO_ARTICLE_ERROR,
	payload: { error }
});

export const fetchCommentsFromArticleRequest = (articleSlug) => ({
	type: commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_REQUEST,
	articleSlug
});

export const fetchCommentsFromArticleDone = (commentList) => ({
	type: commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_DONE,
	payload: { commentList }
});

export const fetchCommentsFromArticleError = (error) => ({
	type: commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_ERROR,
	payload: { error }
});

export const removeCommentFromArticleRequest = (commentToDeleteData, articleSlug, commentId) => ({
	type: commentsTypes.REMOVE_COMMENT_FROM_ARTICLE_REQUEST,
	articleSlug,
	commentId,
	commentToDeleteData
});

export const removeCommentFromArticleDone = (commentToDeleteData) => ({
	type: commentsTypes.REMOVE_COMMENT_FROM_ARTICLE_DONE,
	payload: { commentToDeleteData }
});

export const removeCommentFromArticleError = (error) => ({
	type: commentsTypes.REMOVE_COMMENT_FROM_ARTICLE_ERROR,
	payload: { error }
});

export const unloadCommentsFromArticle = () => ({
	type: commentsTypes.UNLOAD_COMMENTS_FROM_ARTICLE
});
