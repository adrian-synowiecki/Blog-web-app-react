import commentsTypes from '../types/comments';

export const addCommentToArticleRequest = (userObj, slug) => ({
	type: commentsTypes.ADD_COMMENT_TO_ARTICLE_Request,
	userObj,
	slug
});

export const addCommentToArticleDone = (commentObj) => ({
	type: commentsTypes.ADD_COMMENT_TO_ARTICLE_DONE,
	payload: commentObj
});

export const addCommentToArticleError = (error) => ({
	type: commentsTypes.ADD_COMMENT_TO_ARTICLE_FAILURE,
	payload: { error }
});

export const fetchCommentsFromArticleRequest = (slug) => ({
	type: commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_Request,
	slug
});

export const fetchCommentsFromArticleDone = (comments) => ({
	type: commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_DONE,
	payload: comments
});

export const fetchCommentsFromArticleFailure = (error) => ({
	type: commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_FAILURE,
	payload: { error }
});

export const fetchCommentsFromArticleUnmounted = () => ({
	type: commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_UNMOUNTED
});

export const removeCommentFromArticleRequest = (slug, commentId) => ({
	type: commentsTypes.REMOVE_COMMENT_FROM_ARTICLE_Request,
	slug,
	commentId
});

export const removeCommentFromArticleDone = () => ({
	type: commentsTypes.REMOVE_COMMENT_FROM_ARTICLE_DONE
});

export const removeCommentFromArticleError = (error) => ({
	type: commentsTypes.REMOVE_COMMENT_FROM_ARTICLE_ERROR,
	payload: { error }
});
