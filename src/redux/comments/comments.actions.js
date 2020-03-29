import commentsTypes from './comments.types';

// add comment to article
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

// fetch comments from article
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

// remove comment from article
export const removeCommentFromArticleRequest = ( articleSlug, commentToDeleteId) => ({
	type: commentsTypes.REMOVE_COMMENT_FROM_ARTICLE_REQUEST,
	articleSlug,
	commentToDeleteId,
});
export const removeCommentFromArticleDone = (commentToDeleteId) => ({
	type: commentsTypes.REMOVE_COMMENT_FROM_ARTICLE_DONE,
	payload: { commentToDeleteId }
});
export const removeCommentFromArticleError = (error) => ({
	type: commentsTypes.REMOVE_COMMENT_FROM_ARTICLE_ERROR,
	payload: { error }
});


export const unloadCommentsFromArticle = () => ({
	type: commentsTypes.UNLOAD_COMMENTS_FROM_ARTICLE
});

export const clearCommentsError = () => ({
	type: commentsTypes.CLEAR_COMMENTS_ERROR
});
