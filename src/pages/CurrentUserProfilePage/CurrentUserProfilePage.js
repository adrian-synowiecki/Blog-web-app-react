import React, { useEffect, Fragment } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import {
	fetchArticlesByAuthorRequest,
	fetchFavoriteArticlesRequest,
	unloadArticles
} from 'redux/articleList/articleList.actions';

import Profile from 'components/Profile/Profile';

function UserProfilePage({
	currentUserData,
	articleList,
	isFetchingArticles,
	fetchArticlesByAuthorRequest,
	fetchFavoriteArticlesRequest,
	unloadArticles
}) {
	const { username } = useParams();
	let location = useLocation();

	useEffect(() => {
		if (location.pathname.includes('favorites')) {
			fetchFavoriteArticlesRequest(username);
		} else fetchArticlesByAuthorRequest(username);

		return () => {
			unloadArticles();
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Profile
			profileData={currentUserData}
			articleList={articleList}
			isFetchingArticles={isFetchingArticles}
			fetchArticlesByAuthorRequest={fetchArticlesByAuthorRequest}
			fetchFavoriteArticlesRequest={fetchFavoriteArticlesRequest}
			unloadArticles={unloadArticles}
			path={location.pathname}
		/>
	);
}

const mapStateToProps = (state) => ({
	articleList: state.articleList.articleList,
	currentUserData: state.user.currentUserData,
	isFetchingArticles: state.user.isFetchingArticles
});

const mapDispatchToProps = (dispatch) => ({
	fetchArticlesByAuthorRequest: (username) => dispatch(fetchArticlesByAuthorRequest(username)),
	fetchFavoriteArticlesRequest: (username) => dispatch(fetchFavoriteArticlesRequest(username)),
	unloadArticles: () => dispatch(unloadArticles())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);
