import { all, put, call, takeLatest, takeEvery } from 'redux-saga/effects';


import { history } from '../../index';
import * as articleActions from '../actions/article'
import * as api from '../api/article'
import articleTypes from '../types/article'



 
function* fetchArticleAsync(action) {
     try {
        const response = yield call(api.fetchArticleFromAPI, action.articleSlug)
        yield put(articleActions.fetchArticleDone(response.data.article))     
    } catch (error) {
        yield put(articleActions.fetchArticleError(error))
    } 
}

function* createArticleAsync(action) {
    try {
        yield call(api.createArticleInAPI, action.articleCreationData)
        yield put(articleActions.createArticleDone()) 
        yield history.push('/');
    } catch (error) {
        yield put(articleActions.createArticleError(error))
        
    }
}

function* updateArticleAsync(action) {
    const {articleSlug, articleCreationData} = action
    try {
        yield call(api.updateArticleInAPI, articleSlug, articleCreationData)
        yield put(articleActions.updateArticleDone())
        yield history.push('/');
    } catch (error) {
        yield put(articleActions.updateArticleError(error))
    }
}

function* deleteArticleAsync(action) {
    try {
        yield call(api.deleteArticleInAPI, action.articleSlug)
        yield put(articleActions.deleteArticleDone())
    } catch (error) {
        yield put(articleActions.deleteArticleError(error))
    }
}

export default function* watchArticleSaga() {
    yield all ([
       yield takeLatest(articleTypes.FETCH_ARTICLE_REQUEST, fetchArticleAsync),
       yield takeLatest(articleTypes.CREATE_ARTICLE_REQUEST, createArticleAsync),
       yield takeLatest(articleTypes.UPDATE_ARTICLE_REQUEST, updateArticleAsync),
       yield takeLatest(articleTypes.DELETE_ARTICLE_REQUEST, deleteArticleAsync) 
    ])
}


/* export const fetcharticle = (slug) => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.get(`api/articles/${slug}`);
			dispatch(fetcharticleDone(response.data.article));
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

