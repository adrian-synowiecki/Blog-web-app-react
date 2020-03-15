import { all, put, call, takeLatest, takeEvery } from 'redux-saga/effects';

import articlesTypes from './articleList.types'
import * as articlesActions from './articleList.actions'
import * as api from './articleList.api'

function* fetchArticlesByMostRecentAsync(action) {
	try {
		const response = yield call(api.fetchArticlesFromAPI, action.offSet);
		yield put(articlesActions.fetchArticlesByMostRecentDone(response.data.articles)); 
	} catch (error) {
		yield put(articlesActions.fetchArticlesByMostRecentError(error.response)); 
		console.log(error);
	}
}

function* fetchArticlesByAuthorAsync(action) {
	try {
		const response = yield call(api.fetchArticlesByAuthorFromAPI, action.username);
		console.log(response.data.articles)
		yield put(articlesActions.fetchArticlesByAuthorDone(response.data.articles));
	} catch (error) {
		console.log(error);
	}
}

function* fetchFavoriteArticlesAsync(action) {
	try {
		const response = yield call(api.fetchFavoriteArticlesFromAPI, action.username);
		console.log(response)
		yield put(articlesActions.fetchFavoriteArticlesDone(response.data.articles));
	} catch (error) {
		yield put(articlesActions.fetchFavoriteArticlesError(error.response));
		console.log(error.response);
	}
}

function* fetchArticlesByTagAsync(action) {
	try {
		const response = yield call(api.fetchArticlesByTagFromAPI, action.tag);
		yield put(articlesActions.fetchArticlesByTagDone(response.data.articles));
	} catch (error) {
		yield put(articlesActions.fetchArticlesByTagError(error));
		console.log(error);
	}
}

function* addArticleToFavoritesAsync(action) {
	try {
		const response = yield call(api.addArticleToFavoritesInApi, action.articleSlug);
	 	yield put(articlesActions.addArticleToFavoritesDone(response.data.article)); 
	} catch (error) {
		yield put(articlesActions.addArticleToFavoritesError(error));
	
	}
}

function* removeArticleFromFavoritesAsync(action) {
	try {
		const response = yield call(api.removeArticleFromFavoritesFromApi, action.articleSlug);
		console.log(response.data)
		yield put(articlesActions.removeArticleFromFavoritesDone(response.data.article)); 
	} catch (error) {
		yield put(articlesActions.removeArticleFromFavoritesError(error));
	
	}
}

export default function* watchArticlesSaga() {
	yield all([
		yield takeLatest(articlesTypes.FETCH_ARTICLES_BY_MOST_RECENT_REQUEST, fetchArticlesByMostRecentAsync),
		yield takeLatest(articlesTypes.FETCH_ARTICLES_BY_AUTHOR_REQUEST, fetchArticlesByAuthorAsync),
		yield takeLatest(articlesTypes.FETCH_FAVORITE_ARTICLES_REQUEST, fetchFavoriteArticlesAsync),
		yield takeLatest(articlesTypes.FETCH_ARTICLES_BY_TAG_REQUEST, fetchArticlesByTagAsync),
		yield takeLatest(articlesTypes.ADD_ARTICLE_TO_FAVORITES_REQUEST, addArticleToFavoritesAsync),
		yield takeLatest(articlesTypes.REMOVE_ARTICLE_FROM_FAVORITES_REQUEST, removeArticleFromFavoritesAsync) 
	]);
}