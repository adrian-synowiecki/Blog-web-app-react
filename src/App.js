import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';

import { setCurrentPageNumberToFirst } from './redux/common/common.actions';
import { fetchArticlesByMostRecentRequest } from './redux/articleList/articleList.actions';

import HomePage from './pages/HomePage/HomePage';
import ArticleAuthorProfilePage from './pages/ArticleAuthorProfilePage/ArticleAuthorProfilePage';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';
import ArticleOverviewPage from './pages/ArticleOverviewPage/ArticleOverviewPage';
import UserSettingsPage from './pages/UserSettingsPage/UserSettingsPage';
import ArticleCreationPage from './pages/ArticleCreationPage/ArticleCreationPage';
import EditArticlePage from './pages/EditArticlePage/EditArticlePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Navbar from './components/Navbar/Navbar';

function App({ currentUserData, isAuth, setCurrentPageNumberToFirst, fetchArticlesByMostRecentRequest }) {
	return (
		<div>
			<Navbar
				currentUserData={currentUserData}
				isAuth={isAuth}
				setCurrentPageNumberToFirst={setCurrentPageNumberToFirst}
				fetchArticlesByMostRecentRequest={fetchArticlesByMostRecentRequest}
			/>
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route path="/page/:currentPageNumber">
					<HomePage />
				</Route>
				<Route path="/login">
					<LoginPage />
				</Route>
				<Route path="/signUp">
					<SignUpPage />
				</Route>
				<Route path="/userSettings">
					<UserSettingsPage />
				</Route>
				/>
				<Route path="/createNewArticle">
					<ArticleCreationPage />
				</Route>
				<Route path="/editArticle/:articleSlug">
					<EditArticlePage />
				</Route>
				<Route path="/article/:articleSlug">
					<ArticleOverviewPage />
				</Route>
				<Route path="/articleAuthorProfile/:username">
					<ArticleAuthorProfilePage />
				</Route>
				<Route path="/userProfile/:username">
					<UserProfilePage />
				</Route>
				<Route path="*" render={({ history }) => history.goBack()} />
			</Switch>
		</div>
	);
}

const mapStateToProps = (state) => ({
	currentUserData: state.currentUser.currentUserData,
	isAuth: state.currentUser.isAuth
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentPageNumberToFirst: () => dispatch(setCurrentPageNumberToFirst()),
	fetchArticlesByMostRecentRequest: () => dispatch(fetchArticlesByMostRecentRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
