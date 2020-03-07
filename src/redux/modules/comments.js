/* import axiosInstance from '../../utils/axios';

const FETCH_COMMENTS_FROM_ARTICLE_REQUESTED = 'FETCH_COMMENTS_FROM_ARTICLE_REQUESTED';
const FETCH_COMMENTS_FROM_ARTICLE_DONE = 'FETCH_COMMENTS_FROM_ARTICLE_DONE';
const FETCH_COMMENTS_FROM_ARTICLE_FAILURE = 'FETCH_COMMENTS_FROM_ARTICLE_FAILURE';
const FETCH_COMMENTS_FROM_ARTICLE_UNMOUNTED = 'FETCH_COMMENTS_FROM_ARTICLE_UNMOUNTED'


const ADD_COMMENT_TO_ARTICLE_REQUESTED = 'ADD_COMMENT_TO_ARTICLE_REQUESTED';
const ADD_COMMENT_TO_ARTICLE_DONE = 'ADD_COMMENT_TO_ARTICLE_DONE';
const ADD_COMMENT_TO_ARTICLE_FAILURE = 'ADD_COMMENT_TO_ARTICLE_FAILURE';




const addCommentToArticleDone = (commentObj) => ({
	type: ADD_COMMENT_TO_ARTICLE_DONE,
	payload: commentObj
});



const fetchCommentsFromArticleDone = (comments) => ({
	type: FETCH_COMMENTS_FROM_ARTICLE_DONE,
	payload: comments
});

export const fetchCommentsFromArticleUnmounted= () => ({
	type: FETCH_COMMENTS_FROM_ARTICLE_UNMOUNTED 
})

const initialState = {
	commentsList: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_COMMENT_TO_ARTICLE_DONE:
			return { ...state, commentsList: [ action.payload, ...state.commentsList ] };
		case FETCH_COMMENTS_FROM_ARTICLE_DONE:
			return { ...state, commentsList: [ ...action.payload ] };
		case FETCH_COMMENTS_FROM_ARTICLE_UNMOUNTED:
			return {}
		default:
			return state;
	}
}

export const fetchCommentsFromArticle = (slug) => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.get(`api/articles/${slug}/comments`);
			dispatch(fetchCommentsFromArticleDone(response.data.comments));
		} catch (error) {
			console.log(error.response);
		}
	};
};

export const addCommentToArticle = (userObj, slug) => {
	return async (dispatch) => {
		console.log(slug);
		try {
			const response = await axiosInstance.post(`api/articles/${slug}/comments`, JSON.stringify(userObj));
			console.log(response.data.comment);
			dispatch(addCommentToArticleDone(response.data.comment));
		} catch (error) {
			console.log(error.response);
		}
	};
};

export const removeCommentFromArticle = (slug, commentId) => {
	return async (dispatch) => {
		console.log(slug);
		try {
			await axiosInstance.delete(`api/articles/${slug}/comments/${commentId}`);
		} catch (error) {
			console.log(error.response);
		}
	};
};
 */