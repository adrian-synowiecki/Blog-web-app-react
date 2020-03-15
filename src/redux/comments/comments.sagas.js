import { all, put, call, takeLatest, takeEvery } from 'redux-saga/effects';

import { history } from '../../index';
import * as api from './comments.api'
import * as commentsActions from './comments.actions'
import commentsTypes from './comments.types'

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