import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import articleList from './articleList/articleList.reducer';
import user from './user/user.reducer';
import profile from './profile/profile.reducer';
import tags from './tags/tags.reducer';
import comments from './comments/comments.reducer';
import article from './article/article.reducer';
import common from './common/common.reducer';

const createRootReducer = (history) =>
	combineReducers({
		articleList,
		user,
		profile,
		tags,
		comments,
		article,
		common,
		router: connectRouter(history)
	});
export default createRootReducer;
