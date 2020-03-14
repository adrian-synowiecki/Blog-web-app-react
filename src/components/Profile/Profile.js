import React, { useEffect } from 'react';
import {isEmpty} from 'lodash'

import { connect } from 'react-redux';
import { Route, useParams, useHistory } from 'react-router-dom';

import { fetchArticlesByAuthorRequest, fetchFavoriteArticlesRequest } from '../../redux/actions/articleList';
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
	articleList,
	profileData,
	username,
	currentUserData,
	favoriteArticles,
	userArticles,
	fetchArticlesByAuthorRequest,
	fetchFavoriteArticlesRequest,
}) {
	let profileLink;
	let profileLinkFavorites;

	if (!isEmpty(profileData)) {
		profileLink = `/articleAuthorProfile/${profileData.username}`;
		profileLinkFavorites = `/articleAuthorProfile/${profileData.username}/favorites`;
	} else if (!isEmpty(currentUserData)) {
		profileLink = `/userProfile/${currentUserData.username}`;
		profileLinkFavorites = `/userProfile/${currentUserData.username}/favorites`;
	}

	return (
		<ProfileContainer>
			<UserInfo>
				{!isEmpty(profileData) ? (
					<React.Fragment>
						<ImageProfile src={profileData.image} />
						<Username>{profileData.username}</Username>
						<Bio>{profileData.bio}</Bio>
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
							onClick={() => fetchArticlesByAuthorRequest(username)}
							activeStyle={styles.activeLinkStyle}
						>
							My Articles
						</StyledNavLink>
						<StyledNavLink
							to={profileLinkFavorites}
							onClick={() => fetchFavoriteArticlesRequest(username)}
							activeStyle={styles.activeLinkStyle}
						>
							Favorited Articles
						</StyledNavLink>
					</NavLinks>
				</ArticlesChoice>

				{articleList.length > 0 ? (
					articleList.map((articleData) => <ArticlePreview key={articleData.slug} articleData={articleData} />)
				) : (
					'No articles found'
				)}

				<Route
					exact
					path={`${path}/favorites`}
					render={() =>
						articleList.length > 0
							? articleList.map((articleData) => <ArticlePreview key={articleData.slug} articleData={articleData} />)
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
	fetchArticlesByAuthorRequest: (userName) => dispatch(fetchArticlesByAuthorRequest(userName)),
	fetchFavoriteArticlesRequest: (userName) => dispatch(fetchFavoriteArticlesRequest(userName))
});

export default connect(null, mapDispatchToProps)(Profile);
