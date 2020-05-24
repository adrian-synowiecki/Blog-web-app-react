import React, { Fragment, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import { fetchArticlesByMostRecentRequest } from 'redux/articleList/articleList.actions';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage/ProfilePage'));
const ArticleOverviewPage = lazy(() => import('pages/ArticleOverviewPage/ArticleOverviewPage'));
const CurrentUserSettingsPage = lazy(() => import('pages/CurrentUserSettingsPage/CurrentUserSettingsPage'));
const ArticleCreationPage = lazy(() => import('pages/ArticleCreationPage/ArticleCreationPage'));
const EditArticlePage = lazy(() => import('pages/EditArticlePage/EditArticlePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));
const PrivateRoute = lazy(() => import('components/PrivateRoute/PrivateRoute'));
const Navbar = lazy(() => import('components/Navbar/Navbar'));
const NotFound = lazy(() => import('components/NotFound/NotFound'));

/* import ProfilePage from 'pages/ProfilePage/ProfilePage';
import ArticleOverviewPage from 'pages/ArticleOverviewPage/ArticleOverviewPage';
import CurrentUserSettingsPage from 'pages/CurrentUserSettingsPage/CurrentUserSettingsPage';
import ArticleCreationPage from 'pages/ArticleCreationPage/ArticleCreationPage';
import EditArticlePage from 'pages/EditArticlePage/EditArticlePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import SignUpPage from 'pages/SignUpPage/SignUpPage';
import Navbar from 'components/Navbar/Navbar';
import NotFound from 'components/NotFound/NotFound';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'; */

/* import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </div>
  );
} */

function App({ currentUserData, isAuth, fetchArticlesByMostRecentRequest }) {
	return (
		<Fragment>
			<ErrorBoundary>
				<Suspense fallback={<LoadingSpinner center />}>
					<Navbar
						currentUserData={currentUserData}
						isAuth={isAuth}
						fetchArticlesByMostRecentRequest={fetchArticlesByMostRecentRequest}
					/>
					<AnimatePresence>
						<Switch>
							{[
								'/',
								'/page/:currentPageNumber',
								'/tag/:tag',
								'/tag/:tag/:currentPageNumber'
							].map((path) => (
								<Route exact key={path} path={path}>
									<MainPage />
								</Route>
							))}
							<Route path="/login">
								<LoginPage />
							</Route>
							<Route path="/signUp">
								<SignUpPage />
							</Route>
							<Route path="/article/:articleSlug">
								<ArticleOverviewPage />
							</Route>
							<Route path="/profile/:username">
								<ProfilePage />
							</Route>
							<PrivateRoute path="/userSettings">
								<CurrentUserSettingsPage />
							</PrivateRoute>
							<PrivateRoute path="/createNewArticle">
								<ArticleCreationPage />
							</PrivateRoute>
							<PrivateRoute path="/editArticle/:articleSlug">
								<EditArticlePage />
							</PrivateRoute>
							<Route path="*">
								<NotFound>404 Page Not Found</NotFound>
							</Route>
						</Switch>
					</AnimatePresence>
				</Suspense>
			</ErrorBoundary>
		</Fragment>
	);
}

const mapStateToProps = (state) => ({
	currentUserData: state.user.currentUserData,
	isAuth: state.user.isAuth
});

const mapDispatchToProps = (dispatch) => ({
	fetchArticlesByMostRecentRequest: () => dispatch(fetchArticlesByMostRecentRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
