import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';

import Profile from '../../components/Profile/Profile';

import { useLocation, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchArticlesByAuthorRequested, fetchFavoriteArticlesRequested } from '../../redux/actions/articles';

function UserProfile({
	match,
	userDetails,
	fetchArticlesByAuthorRequested,
	fetchFavoriteArticlesRequested,
	userArticles,
	favoriteArticles,
	articlesList
}) {
	useEffect(() => {
		fetchArticlesByAuthorRequested(username);
	/* 	fetchFavoriteArticlesRequested(username); */
	}, []);

	const { username } = useParams();
	let location = useLocation();

	console.log(articlesList);
	return (
		<div>
			{!isEmpty(userDetails) && (
				<Profile
					articlesList={articlesList}
					username={username}
					path={location.pathname}
					/* 		userArticles={userArticles} */
					userDetails={userDetails}
					/* 				favoriteArticles={favoriteArticles} */
				/>
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		articlesList: state.articles.articlesList,
		userDetails: state.user.userDetails
	};
};
const mapDispatchToProps = (dispatch) => ({
	fetchArticlesByAuthorRequested: (username) => dispatch(fetchArticlesByAuthorRequested(username)),
	fetchFavoriteArticlesRequested: (username) => dispatch(fetchFavoriteArticlesRequested(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
