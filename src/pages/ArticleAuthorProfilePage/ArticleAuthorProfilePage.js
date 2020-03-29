import React, { useEffect, Fragment } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchProfileByUsernameRequest, unloadProfile } from 'redux/profile/profile.actions';
import {
	fetchArticlesByAuthorRequest,
	fetchFavoriteArticlesRequest,
	unloadArticles
} from 'redux/articleList/articleList.actions';

import Profile from 'components/Profile/Profile';

function ArticleAuthorProfilePage({
	profileData,
	articleList,
	error,
	isFetchingArticles,
	fetchArticlesByAuthorRequest,
	fetchFavoriteArticlesRequest,
	fetchProfileByUsernameRequest,
	unloadArticles,
	unloadProfile
}) {
	const { username } = useParams();
	let location = useLocation();

	useEffect(() => {
		fetchProfileByUsernameRequest(username);
		if (location.pathname.includes('favorites')) {
			fetchFavoriteArticlesRequest(username);
		} else fetchArticlesByAuthorRequest(username);

		return () => {
			unloadArticles();
			unloadProfile();
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Fragment>
			{error ? (
				<p>Not Found</p>
			) : (
				<Profile
					profileData={profileData}
					articleList={articleList}
					isFetchingArticles={isFetchingArticles}
					fetchArticlesByAuthorRequest={fetchArticlesByAuthorRequest}
					fetchFavoriteArticlesRequest={fetchFavoriteArticlesRequest}
					unloadArticles={unloadArticles}
					/* username={username} */
					path={location.pathname}
				/>
			)}
		</Fragment>
	);
}

const mapStateToProps = (state) => ({
	articleList: state.articleList.articleList,
	isFetchingArticles: state.article.isFetchingArticles,
	profileData: state.profile.profileData,
	error: state.profile.error
});

const mapDispatchToProps = (dispatch) => ({
	fetchArticlesByAuthorRequest: (username) => dispatch(fetchArticlesByAuthorRequest(username)),
	fetchFavoriteArticlesRequest: (username) => dispatch(fetchFavoriteArticlesRequest(username)),
	unloadArticles: () => dispatch(unloadArticles()),
	fetchProfileByUsernameRequest: (username) => dispatch(fetchProfileByUsernameRequest(username)),
	unloadProfile: () => dispatch(unloadProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleAuthorProfilePage);
