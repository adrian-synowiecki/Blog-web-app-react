import commentsTypes from '../types/comments';

export const addCommentToArticleRequested = (userObj, slug) => ({
	type: commentsTypes.ADD_COMMENT_TO_ARTICLE_REQUESTED,
	userObj,
	slug
});

export const addCommentToArticleDone = (commentObj) => ({
	type: commentsTypes.ADD_COMMENT_TO_ARTICLE_DONE,
	payload: commentObj
});

export const addCommentToArticleFailure = (error) => ({
	type: commentsTypes.ADD_COMMENT_TO_ARTICLE_FAILURE,
	payload: error
});

export const fetchCommentsFromArticleRequested = (slug) => ({
	type: commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_REQUESTED,
	slug
});

export const fetchCommentsFromArticleDone = (comments) => ({
	type: commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_DONE,
	payload: comments
});

export const fetchCommentsFromArticleFailure = (error) => ({
	type: commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_FAILURE,
	payload: error
});

export const fetchCommentsFromArticleUnmounted = () => ({
	type: commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_UNMOUNTED
});

export const removeCommentFromArticleRequested = (slug, commentId) => ({
	type: commentsTypes.REMOVE_COMMENT_FROM_ARTICLE_REQUESTED,
	slug,
	commentId
});

export const removeCommentFromArticleDone = () => ({
	type: commentsTypes.REMOVE_COMMENT_FROM_ARTICLE_DONE
});

export const removeCommentFromArticleError = (error) => ({
	type: commentsTypes.REMOVE_COMMENT_FROM_ARTICLE_ERROR,
	payload: error
});
