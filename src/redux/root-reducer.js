import { combineReducers } from 'redux';

import articleList from './articleList/articleList.reducer'
import currentUser from './currentUser/currentUser.reducer'
import profile from './profile/profile.reducer'
import tags from './tags/tags.reducer'
import comments from './comments/comments.reducer'
import article from './article/article.reducer'


const rootReducer = combineReducers({
	articleList,
	currentUser,
	profile,
	tags,
	comments,
	article,
	
});

export default rootReducer;
