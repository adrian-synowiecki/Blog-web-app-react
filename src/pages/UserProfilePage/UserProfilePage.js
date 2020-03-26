import React, { useEffect, Fragment } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import {
	fetchArticlesByAuthorRequest,
	fetchFavoriteArticlesRequest,
	unloadArticles
} from '../../redux/articleList/articleList.actions';

import Profile from '../../components/Profile/Profile';

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
	}, []);

	return (
		<Fragment>
			<Profile
				profileData={currentUserData}
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

const mapStateToProps = (state) => ({
	articleList: state.articleList.articleList,
	currentUserData: state.currentUser.currentUserData,
	isFetchingArticles: state.currentUser.isFetchingArticles
});

const mapDispatchToProps = (dispatch) => ({
	fetchArticlesByAuthorRequest: (username) => dispatch(fetchArticlesByAuthorRequest(username)),
	fetchFavoriteArticlesRequest: (username) => dispatch(fetchFavoriteArticlesRequest(username)),
	unloadArticles: () => dispatch(unloadArticles())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);
