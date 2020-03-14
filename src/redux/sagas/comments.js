import { all, put, call, takeLatest, takeEvery } from 'redux-saga/effects';

import { history } from '../../index';
import * as api from '../api/comments';
import * as commentsActions from '../actions/comments';
import commentsTypes from '../types/comments';

function* fetchCommentsFromArticleAsync(action) {
	try {
		const response = yield call(api.fetchCommentsFromArticleFromAPI, action.articleSlug);
		yield put(commentsActions.fetchCommentsFromArticleDone(response.data.comments));
	} catch (error) {
		yield put(commentsActions.fetchCommentsFromArticleError(error));
	}
}

function* addCommentToArticleAsync(action) {
	const { commentCreationData, articleSlug } = action;
	try {
		const response = yield call(api.addCommentToArticleInAPI, commentCreationData, articleSlug);
		yield put(commentsActions.addCommentToArticleDone(response.data.comment));
	} catch (error) {
		yield put(commentsActions.addCommentToArticleError(error));
		
	}
}

function* removeCommentFromArticleAsync(action) {
	const { commentToDeleteData, articleSlug, commentId } = action;
	try {
		yield call(api.removeCommentFromArticle, articleSlug, commentId);
		yield put(commentsActions.removeCommentFromArticleDone(commentToDeleteData));
	} catch (error) {
		yield put(commentsActions.removeCommentFromArticleError(error));
	
	}
}

export default function* watchCommentsSaga() {
	yield all([
		takeLatest(commentsTypes.FETCH_COMMENTS_FROM_ARTICLE_REQUEST, fetchCommentsFromArticleAsync),
		takeLatest(commentsTypes.ADD_COMMENT_TO_ARTICLE_REQUEST, addCommentToArticleAsync),
		takeLatest(commentsTypes.REMOVE_COMMENT_FROM_ARTICLE_REQUEST, removeCommentFromArticleAsync)
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
