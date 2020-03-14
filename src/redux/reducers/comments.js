import commentsTypes from '../types/comments';

const initialState = {
	inProgress: false,
	commentList: [],
	error: null
};

export default function commentsReducer(state = initialState, action) {
	switch (action.type) {
		case commentsTypes.ADD_COMMENT_TO_ARTICLE_REQUEST:
		case commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_REQUEST:
		case commentsTypes.REMOVE_COMMENT_FROM_ARTICLE_REQUEST:
			return { ...state, inProgress: true };

		case commentsTypes.ADD_COMMENT_TO_ARTICLE_DONE:
			return {
				...state,
				commentList: [ action.payload.addedCommentData, ...state.commentList ],
				inProgress: false
			};
		case commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_DONE:
			return { ...state, commentList: [ ...action.payload.commentList ], inProgress: false };
		case commentsTypes.REMOVE_COMMENT_FROM_ARTICLE_DONE:
			return {
				...state,
				commentList: state.commentList.filter(
					(commentData) => commentData.id !== action.payload.commentToDeleteData.id
				),
				inProgress: false
			};

		case commentsTypes.ADD_COMMENT_TO_ARTICLE_ERROR:
		case commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_ERROR:
		case commentsTypes.REMOVE_COMMENT_FROM_ARTICLE_ERROR:
			return { ...state, error: action.payload.error, inProgress: false };

		case commentsTypes.UNLOAD_COMMENTS_FROM_ARTICLE:
			return { ...state, commentsList: [] };

		default:
			return state;
	}
}
