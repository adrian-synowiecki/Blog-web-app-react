import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';

import Profile from '../../components/Profile/Profile';

import { fetchProfileByUsernameRequested, unloadProfile } from '../../redux/actions/profile';

import { useLocation, useParams } from 'react-router-dom';

import { fetchArticlesByAuthorRequested, unloadArticles } from '../../redux/actions/articles';

import { connect } from 'react-redux';

function ArticleAuthorProfile({
	fetchArticlesByAuthorRequested,
	fetchProfileByUsernameRequested,
	match,
	articlesList,
	unloadArticles,
	unloadProfile,
	fetchUserProfile,
	fetchUserProfileUnmounted,
	profileDetails
}) {
	const { username } = useParams();
	let location = useLocation();
	useEffect(() => {
		fetchArticlesByAuthorRequested(username);
		fetchProfileByUsernameRequested(username);

		console.log(username);
		return () => {
			unloadArticles();
			unloadProfile();
		};
	}, []);
	console.log(articlesList);
	return (
		<div>
			{!isEmpty(profileDetails) && (
				<Profile
					path={location.pathname}
					username={username}
					/* 	userArticles={userArticles} */
					profileDetails={profileDetails}
					articlesList={articlesList}
					/* 	favoriteArticles={favoriteArticles} */
				/>
			)}
		</div>
	);
}

const mapStateToProps = (state) => ({
	articlesList: state.articles.articlesList,
	profileDetails: state.profile.profileDetails
});

const mapDispatchToProps = (dispatch) => ({
	fetchProfileByUsernameRequested: (username) => dispatch(fetchProfileByUsernameRequested(username)),
	fetchArticlesByAuthorRequested: (username) => dispatch(fetchArticlesByAuthorRequested(username)),
	unloadArticles: () => dispatch(unloadArticles()),
	unloadProfile: () => dispatch(unloadProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleAuthorProfile);
