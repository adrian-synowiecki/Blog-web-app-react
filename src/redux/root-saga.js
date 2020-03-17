import { all } from 'redux-saga/effects';

import watchArticleListSaga from './articleList/articleList.sagas'
import watchCommentsSaga from './comments/comments.sagas'
import watchCurrentUserSaga from './currentUser/currentUser.sagas'
import watchProfileSaga from './profile/profile.sagas'
import watchArticleSaga from './article/article.sagas'
import watchTagsSaga from './tags/tags.sagas'

export default function* rootSaga() {
	yield all([
		...watchArticleSaga(),
		...watchArticleListSaga(),
		...watchCommentsSaga(),
		...watchCurrentUserSaga(),
		...watchProfileSaga(),
		...watchTagsSaga()
	]);
}