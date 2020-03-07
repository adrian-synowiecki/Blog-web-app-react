import { combineReducers } from 'redux';

import articles from './reducers/articles'
import user from './reducers/user'
import profile from './reducers/profile'
import tags from './reducers/tags'
import comments from './reducers/comments'
import singleArticle from './reducers/singleArticle'


const rootReducer = combineReducers({
	articles,
	user,
	profile,
	tags,
	comments,
	singleArticle,
	
});

export default rootReducer;
