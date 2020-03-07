import  commentsTypes from '../types/comments'



export default function(state = {}, action) {
	switch (action.type) {
		case commentsTypes.ADD_COMMENT_TO_ARTICLE_DONE:
			return { ...state, commentsList: [ action.payload, ...state.commentsList ] };
		case commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_DONE:
			return { ...state, commentsList: [ ...action.payload ] };
		case commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_UNMOUNTED:
			return {}
		default:
			return state;
	}
}