import React, { useEffect } from 'react';
import {isEmpty} from 'lodash'

import { connect } from 'react-redux';
import { Route, useParams, useHistory } from 'react-router-dom';

import { fetchArticlesByAuthorRequested, fetchFavoriteArticlesRequested } from '../../redux/actions/articles';
import colors from '../../utils/colors';
import styles from '../../utils/styles';
import FavoriteArticles from '../FavoriteArticles/FavoriteArticles';
import ArticlePreview from '../ArticlePreview/ArticlePreview';

import {
	ProfileContainer,
	UserInfo,
	ImageProfile,
	Username,
	Bio,
	ArticlesChoice,
	StyledNavLink,
	NavLinks,
	ArticlesList
} from './Profile.style';

function Profile({
	path,
	articlesList,
	profileDetails,
	username,
	currentUserData,
	favoriteArticles,
	userArticles,
	fetchArticlesByAuthorRequested,
	fetchFavoriteArticlesRequested,
	...props
}) {
	let profileLink;
	let profileLinkFavorites;

	if (!isEmpty(profileDetails)) {
		profileLink = `/articleAuthorProfile/${profileDetails.username}`;
		profileLinkFavorites = `/articleAuthorProfile/${profileDetails.username}/favorites`;
	} else if (!isEmpty(currentUserData)) {
		profileLink = `/userProfile/${currentUserData.username}`;
		profileLinkFavorites = `/userProfile/${currentUserData.username}/favorites`;
	}

	return (
		<ProfileContainer>
			<UserInfo>
				{!isEmpty(profileDetails) ? (
					<React.Fragment>
						<ImageProfile src={profileDetails.image} />
						<Username>{profileDetails.username}</Username>
						<Bio>{profileDetails.bio}</Bio>
					</React.Fragment>
				) : (
					<React.Fragment>
						<ImageProfile src={currentUserData.image} />
						<Username>{currentUserData.username}</Username>
						<Bio>{currentUserData.bio}</Bio>
					</React.Fragment>
				)}
			</UserInfo>

			<ArticlesList>
				<ArticlesChoice>
					<NavLinks>
						<StyledNavLink
							exact
							to={profileLink}
							onClick={() => fetchArticlesByAuthorRequested(username)}
							activeStyle={styles.activeLinkStyle}
						>
							My Articles
						</StyledNavLink>
						<StyledNavLink
							to={profileLinkFavorites}
							onClick={() => fetchFavoriteArticlesRequested(username)}
							activeStyle={styles.activeLinkStyle}
						>
							Favorited Articles
						</StyledNavLink>
					</NavLinks>
				</ArticlesChoice>

				{articlesList.length ? (
					articlesList.map((articleContent) => <ArticlePreview key={articleContent.slug} articleContent={articleContent} />)
				) : (
					'No articles found'
				)}

				<Route
					exact
					path={`${path}/favorites`}
					render={() =>
						articlesList.length
							? articlesList.map((articleContent) => <ArticlePreview key={articleContent.slug} articleContent={articleContent} />)
							: 'No favorite articles found'}
				/>
				{/* 		<Route
					exact
					path={`${match.path}/favorites`}
					render={({ ...routerProps }) => <FavoriteArticles favoriteArticles={favoriteArticles} {...routerProps} />}
				/> */}
			</ArticlesList>
		</ProfileContainer>
	);
}

const mapDispatchToProps = (dispatch) => ({
	fetchArticlesByAuthorRequested: (userName) => dispatch(fetchArticlesByAuthorRequested(userName)),
	fetchFavoriteArticlesRequested: (userName) => dispatch(fetchFavoriteArticlesRequested(userName))
});

export default connect(null, mapDispatchToProps)(Profile);
