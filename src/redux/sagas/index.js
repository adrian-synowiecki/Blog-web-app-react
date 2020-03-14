import { all } from 'redux-saga/effects';

import watchArticlesSaga from './articleList';
import watchCommentsSaga from './comments';
import watchCurrentUserSaga from './currentUser';
import watchProfileSaga from './profile';
import watchArticleSaga from './article';
import watchTagsSaga from './tags';

export default function* rootSaga() {
	yield all([
		...watchArticleSaga(),
		...watchArticlesSaga(),
		...watchCommentsSaga(),
		...watchCurrentUserSaga(),
		...watchProfileSaga(),
		...watchTagsSaga()
	]);
}
