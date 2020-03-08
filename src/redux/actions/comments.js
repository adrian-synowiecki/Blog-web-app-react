import commentsTypes from '../types/comments';

export const addCommentToArticleRequest = (commentCreationData, slug) => ({
	type: commentsTypes.ADD_COMMENT_TO_ARTICLE_Request,
	commentCreationData,
	slug
});

export const addCommentToArticleDone = (addedComment) => ({
	type: commentsTypes.ADD_COMMENT_TO_ARTICLE_DONE,
	payload: { addedComment }
});

export const addCommentToArticleError = (error) => ({
	type: commentsTypes.ADD_COMMENT_TO_ARTICLE_FAILURE,
	payload: { error }
});

export const fetchCommentsFromArticleRequest = (slug) => ({
	type: commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_Request,
	slug
});

export const fetchCommentsFromArticleDone = (commentsList) => ({
	type: commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_DONE,
	payload: { commentsList }
});

export const fetchCommentsFromArticleFailure = (error) => ({
	type: commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_FAILURE,
	payload: { error }
});

/////////// CHANGE Z RANAAAAAAAA
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
