import React, { useEffect, Fragment } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { fetchProfileByUsernameRequest, unloadProfile } from '../../redux/profile/profile.actions';
import {
	fetchArticlesByAuthorRequest,
	fetchFavoriteArticlesRequest,
	unloadArticles
} from '../../redux/articleList/articleList.actions';

import Profile from '../../components/Profile/Profile';

function ArticleAuthorProfilePage({
	profileData,
	articleList,
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
	}, []);
/* 
	useEffect(
		() => {
			return () => {
				unloadArticles();
				unloadProfile();
			};
		},
		[ articleList ]
	); */

	return (
		<Fragment>
			<Profile
				profileData={profileData}
				articleList={articleList}
				isFetchingArticles={isFetchingArticles}
				fetchArticlesByAuthorRequest={fetchArticlesByAuthorRequest}
				fetchFavoriteArticlesRequest={fetchFavoriteArticlesRequest}
				unloadArticles={unloadArticles}
				username={username}
				path={location.pathname}
			/>
		</Fragment>
	);
}

const mapStateToProps = ({
	articleList: { isFetchingArticles, articleList, hasErrorArticles },
	profile: { profileData, isFetchingProfileData },
	currentUser: { isAuth }
}) => ({
	articleList,
	isFetchingArticles,
	hasErrorArticles,
	profileData,
	isFetchingProfileData,
	isAuth
});

const mapDispatchToProps = (dispatch) => ({
	fetchArticlesByAuthorRequest: (username) => dispatch(fetchArticlesByAuthorRequest(username)),
	fetchFavoriteArticlesRequest: (username) => dispatch(fetchFavoriteArticlesRequest(username)),
	unloadArticles: () => dispatch(unloadArticles()),
	fetchProfileByUsernameRequest: (username) => dispatch(fetchProfileByUsernameRequest(username)),
	unloadProfile: () => dispatch(unloadProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleAuthorProfilePage);
