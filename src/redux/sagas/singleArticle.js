import { all, put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import { createBrowserHistory } from 'history';

import { history } from '../../index';
import * as singleArticleActions from '../actions/singleArticle'
import * as api from '../api/singleArticle'
import singleArticleTypes from '../types/singleArticle'


 const browserHistory = createBrowserHistory();


 
function* fetchSingleArticle(action) {
  
     try {
        const response = yield call(api.fetchSingleArticleFromAPI, action.slug)
        yield put(singleArticleActions.fetchArticleDone(response.data.article))     
    } catch (error) {
        console.log(error)
        yield put(singleArticleActions.fetchArticleError(error.response))
    } 
}

function* createArticle(action) {
    try {
        yield call(api.createArticleInAPI, action.payload)
        yield history.push('/');
    /*     yield put(singleArticleActions.createArticleDone())  */
    } catch (error) {
        console.log(error.response)
        yield put(singleArticleActions.createArticleError(error.response))
        
    }
}

function* updateArticle(action) {
    const {slug, payload} = action
    try {
        yield call(api.updateArticleInAPI, slug, payload)
        yield put(singleArticleActions.updateArticleDone())
    } catch (error) {
        console.log(error)
        yield put(singleArticleActions.updateArticleError(error.response))
    }
}

function* deleteArticle(action) {
    try {
        yield call(api.deleteArticleInAPI, action.slug)
        yield put(singleArticleActions.deleteArticleDone())
    } catch (error) {
        console.log(error)
        yield put(singleArticleActions.deleteArticleError())
    }
}

export default function* singleArticleWatcher() {
    yield all ([
        takeLatest(singleArticleTypes.FETCH_ARTICLE_REQUESTED, fetchSingleArticle),
        takeLatest(singleArticleTypes.CREATE_ARTICLE_REQUESTED, createArticle),
        takeLatest(singleArticleTypes.UPDATE_ARTICLE_REQUESTED, updateArticle),
        takeLatest(singleArticleTypes.DELETE_ARTICLE_REQUESTED, deleteArticle)
    ])
}


/* export const fetchSingleArticle = (slug) => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.get(`api/articles/${slug}`);
			dispatch(fetchSingleArticleDone(response.data.article));
		} catch (error) {
			console.log(error.response);
		}
	};
};

export const createArticle = (articleDataObj) => {
	return async (dispatch) => {
		console.log(articleDataObj);
		try {
			await axiosInstance.post('api/articles', JSON.stringify(articleDataObj));
		} catch (error) {
			console.log(error.response);
		}
	};
};

export const updateArticle = (slug, articleDataObj) => {
	return async (dispatch) => {
		try {
			await axiosInstance.put(`api/articles/${slug}`, JSON.stringify(articleDataObj));
		} catch (error) {
			console.log(error.response);
		}
	};
};

export const deleteArticle = (slug) => {
	return async (dispatch) => {
		try {
			console.log('dispatched');
			await axiosInstance.delete(`api/articles/${slug}`);
		} catch (error) {
			console.log(error.response);
		}
	};
};
 */