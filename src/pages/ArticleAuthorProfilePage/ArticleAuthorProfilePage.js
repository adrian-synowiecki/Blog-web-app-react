import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';

import Profile from '../../components/Profile/Profile';

import { fetchProfileByUsernameRequest, unloadProfile } from '../../redux/profile/profile.actions';

import { useLocation, useParams } from 'react-router-dom';

import { fetchArticlesByAuthorRequest, unloadArticles } from '../../redux/articleList/articleList.actions';

import { connect } from 'react-redux';

function ArticleAuthorProfilePage({
	fetchArticlesByAuthorRequest,
	fetchProfileByUsernameRequest,
	articleList,
	inProgress,
	error,
	unloadArticles,
	unloadProfile,
	profileData
}) {
	const { username } = useParams();
	let location = useLocation();
	useEffect(() => {
		fetchArticlesByAuthorRequest(username);
		fetchProfileByUsernameRequest(username);

		console.log(username);
		return () => {
			unloadArticles();
			unloadProfile();
		};
	}, []);

	return (
		<div>
			{!isEmpty(profileData) && (
				<Profile
					path={location.pathname}
					username={username}	
					profileData={profileData}
					inProgress={inProgress}
					error={error}
					articleList={articleList}
				/>
			)}
		</div>
	);
}

const mapStateToProps = ({ articleList: { inProgress, articleList, error }, profile: { profileData } }) => ({
	articleList,
	inProgress,
	error,
	profileData
});

const mapDispatchToProps = (dispatch) => ({
	fetchProfileByUsernameRequest: (username) => dispatch(fetchProfileByUsernameRequest(username)),
	fetchArticlesByAuthorRequest: (username) => dispatch(fetchArticlesByAuthorRequest(username)),
	unloadArticles: () => dispatch(unloadArticles()),
	unloadProfile: () => dispatch(unloadProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleAuthorProfilePage);
