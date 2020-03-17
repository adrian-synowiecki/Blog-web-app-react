import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';

import HomePage from './pages/HomePage/HomePage';
import ArticleAuthorProfile from './pages/ArticleAuthorProfilePage/ArticleAuthorProfilePage';
import UserProfile from './pages/UserProfilePage/UserProfilePage';
import ArticleOverview from './pages/ArticleOverviewPage/ArticleOverviewPage';
import UserSettings from './pages/UserSettingsPage/UserSettingsPage';
import ArticleCreation from './pages/ArticleCreationPage/ArticleCreationPage';
import EditArticle from './pages/EditArticlePage/EditArticlePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUp from './pages/SignUpPage/SignUpPage';
import Navbar from './components/Navbar/Navbar';

import { connect } from 'react-redux';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App({ currentUserData }) {
	return (
		<div>
			<Navbar currentUserData={currentUserData} />
			<Switch>
			
					<Route exact path="/">
						<HomePage />
					</Route>

					<Route
						path="/login"
						render={() => (isEmpty(currentUserData) ? <LoginPage /> : <Redirect to="/" />)}
					/>
					<Route
						path="/signUp"
						render={() => (isEmpty(currentUserData) ? <SignUp /> : <Redirect to="/" />)}
					/>
					<Route
						path="/userSettings"
						render={() => (!isEmpty(currentUserData) ? <UserSettings /> : <Redirect to="/" />)}
					/>
					<Route
						path="/createNewArticle"
						render={() => (currentUserData ? <ArticleCreation /> : <Redirect to="/" />)}
					/>
					<Route
						path="/editArticle/:articleSlug"
						render={({ ...props }) =>
							!isEmpty(currentUserData) ? <EditArticle {...props} /> : <Redirect to="/" />}
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
		currentUserData: state.currentUser.currentUserData
	};
};

export default connect(mapStateToProps)(App);
