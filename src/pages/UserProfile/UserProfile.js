import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import Profile from '../../components/Profile/Profile';

import { useLocation, useParams } from 'react-router-dom';

import { fetchArticlesByAuthorRequest, fetchFavoriteArticlesRequest } from '../../redux/actions/articleList';

function UserProfile({
	match,
	currentUserData,
	fetchArticlesByAuthorRequest,
	fetchFavoriteArticlesRequest,
	userArticles,
	favoriteArticles,
	articleList
}) {
	useEffect(() => {
		fetchArticlesByAuthorRequest(username);
		fetchFavoriteArticlesRequest(username);
	}, []);

	const { username } = useParams();
	let location = useLocation();

	return (
		<div>
			{!isEmpty(currentUserData) && (
				<Profile
					articleList={articleList}
					username={username}
					path={location.pathname}
					/* 		userArticles={userArticles} */
					currentUserData={currentUserData}
					/* 				favoriteArticles={favoriteArticles} */
				/>
			)}
		</div>
	);
}

const mapStateToProps = (state) => ({
	articleList: state.articleList.articleList,
	currentUserData: state.currentUser.currentUserData
});

const mapDispatchToProps = (dispatch) => ({
	fetchArticlesByAuthorRequest: (username) => dispatch(fetchArticlesByAuthorRequest(username)),
	fetchFavoriteArticlesRequest: (username) => dispatch(fetchFavoriteArticlesRequest(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
