import { combineReducers } from 'redux';

import articleList from './reducers/articleList'
import currentUser from './reducers/currentUser'
import profile from './reducers/profile'
import tags from './reducers/tags'
import comments from './reducers/comments'
import article from './reducers/article'


const rootReducer = combineReducers({
	articleList,
	currentUser,
	profile,
	tags,
	comments,
	article,
	
});

export default rootReducer;
