import commentsTypes from './comments.types';

const initialState = {
	isFetchingComments: false,
	inProgress: false,
	commentList: [],
	error: null
};

export default function commentsReducer(state = initialState, action) {
	switch (action.type) {
		case commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_REQUEST:
			return { ...state, isFetchingComments: true };
		case commentsTypes.REMOVE_COMMENT_FROM_ARTICLE_REQUEST:
			return { ...state, inProgress: true };

		case commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_DONE:
			return { ...state, commentList: action.payload.commentList, isFetchingComments: false };
		case commentsTypes.ADD_COMMENT_TO_ARTICLE_DONE:
			return {
				...state,
				commentList: [ action.payload.addedCommentData, ...state.commentList ]
			};
		case commentsTypes.REMOVE_COMMENT_FROM_ARTICLE_DONE:
			return {
				...state,
				commentList: state.commentList.filter(
					(commentData) => commentData.id !== action.payload.commentToDeleteId
				),
				inProgress: false
			};

		case commentsTypes.ADD_COMMENT_TO_ARTICLE_ERROR:
			return { ...state, error: action.payload.error };
		case commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_ERROR:
			return { ...state, error: action.payload.error, isFetchingComments: false };
		case commentsTypes.REMOVE_COMMENT_FROM_ARTICLE_ERROR:
			return { ...state, error: action.payload.error, inProgress: false };

		case commentsTypes.UNLOAD_COMMENTS_FROM_ARTICLE:
			return { ...state, commentList: [], error: null };

		case commentsTypes.CLEAR_COMMENTS_ERROR:
			return { ...state, error: null };

		default:
			return state;
	}
}
