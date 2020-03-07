import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';

import HomePage from './pages/HomePage/HomePage';
import ArticleAuthorProfile from './pages/ArticleAuthorProfile/ArticleAuthorProfile';
import UserProfile from './pages/UserProfile/UserProfile';
import ArticleOverview from './pages/ArticleOverview/ArticleOverview';
import UserSettings from './pages/UserSettings/UserSettings';
import CreateNewArticle from './pages/CreateNewArticle/CreateNewArticle';
import EditArticle from './pages/EditArticle/EditArticle';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';

import { connect } from 'react-redux';

function App({ userDetails }) {
	return (
		<div>
			<Navbar userDetails={userDetails} />
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route path="/signIn" render={() => (isEmpty(userDetails) ? <SignIn /> : <Redirect to="/" />)} />
				<Route path="/signUp" render={() => (isEmpty(userDetails) ? <SignUp /> : <Redirect to="/" />)} />
				<Route path="/userSettings" render={() => (!isEmpty(userDetails) ? <UserSettings /> : <Redirect to="/" />)} />
				<Route
					path="/createNewArticle"
					render={() => (userDetails ? <CreateNewArticle /> : <Redirect to="/" />)}
				/>
				<Route
					path="/editArticle/:articleSlug"
					render={({ ...props }) => (!isEmpty(userDetails)  ? <EditArticle {...props} /> : <Redirect to="/" />)}
				/>
				<Route path="/article/:articleSlug" component={ArticleOverview} />
				<Route path="/articleAuthorProfile/:username">
					<ArticleAuthorProfile />
				</Route>
				<Route path="/userProfile/:username">
					<UserProfile />
				</Route>
				<Route path="*" exact render={({ history }) => history.goBack()} />
			</Switch>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		userDetails: state.user.userDetails
	};
};

export default connect(mapStateToProps)(App);
