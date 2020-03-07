import { all } from 'redux-saga/effects';

import articlesWatcher from './articles';
import commentsWatcher from './comments';
import userWatcher from './user';
import profileWatcher from './profile';
import singleArticleWatcher from './singleArticle';
import tagsWatcher from './tags'

export default function* rootSaga() {
	yield all([
		...articlesWatcher(),
		...commentsWatcher(),
		...userWatcher(),
		...profileWatcher(),
		...singleArticleWatcher(),
		...tagsWatcher()
	]);
}
