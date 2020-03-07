import { all, put, call, takeLatest, takeEvery } from 'redux-saga/effects';


import { history } from '../../index';
import * as api from '../api/comments';
import * as commentsActions from '../actions/comments';
import commentsTypes from '../types/comments';



function* fetchCommentsFromArticle(action) {
	
	try {
		const response = yield call(api.fetchCommentsFromArticleFromAPI, action.slug);
		yield put(commentsActions.fetchCommentsFromArticleDone(response.data.comments));
	} catch (error) {
		yield put(commentsActions.fetchCommentsFromArticleFailure(error.response));
		console.log(error);
	}
}

function* addCommentToArticle(action) {
	const { userObj, slug } = action;

	try {
		const response = yield call(api.addCommentToArticleInAPI, userObj, slug);
		yield put(commentsActions.addCommentToArticleDone(response.data.comment));
	} catch (error) {
		yield put(commentsActions.addCommentToArticleFailure(error.response));
		console.log(error);
	}
}

function* removeCommentFromArticle(action) {
	const { slug, commentId } = action;

	try {
		yield call(api.removeCommentFromArticle, slug, commentId);
		yield put(commentsActions.removeCommentFromArticleDone());
	} catch (error) {
		yield put(commentsActions.removeCommentFromArticleError());
		console.log(error);
	}
}

export default function* commentsWatcher() {
	yield all([
		takeLatest(commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_REQUESTED, fetchCommentsFromArticle),
		takeLatest(commentsTypes.ADD_COMMENT_TO_ARTICLE_REQUESTED, addCommentToArticle),
		takeLatest(commentsTypes.REMOVE_COMMENT_FROM_ARTICLE_REQUESTED, removeCommentFromArticle)
	]);
}

/* export const fetchCommentsFromArticle = (slug) => {
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
}; */
