import React, { Fragment } from 'react';
import { isEmpty } from 'lodash';
import styles from '../../utils/styles';

import {
	ProfileContainer,
	UserInfo,
	ImageProfile,
	Username,
	Bio,
	ArticlesChoice,
	StyledNavLink,
	NavLinks,
	ArticlesWrapper,
	NotFoundMessage
} from './Profile.style';

import ArticleList from '../ArticleList/ArticleList';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function Profile({
	profileData,
	articleList,
	isFetchingArticles,
	fetchArticlesByAuthorRequest,
	fetchFavoriteArticlesRequest,
	unloadArticles,
	path,
	username
}) {
	let profileLink;
	let profileLinkFavorites;
	let notFoundMessage;

	if (path.includes('articleAuthorProfile')) {
		profileLink = `/articleAuthorProfile/${profileData.username}`;
		profileLinkFavorites = `/articleAuthorProfile/${profileData.username}/favorites`;
	} else if (path.includes('userProfile')) {
		profileLink = `/userProfile/${profileData.username}`;
		profileLinkFavorites = `/userProfile/${profileData.username}/favorites`;
	}
	if (path.includes('favorites')) {
		notFoundMessage = 'No favorite articles found.';
	} else {
		notFoundMessage = 'No articles found.';
	}
	console.log(isFetchingArticles, articleList);

	const handleFetchArticlesByAuthorRequest = () => {
		unloadArticles();
		fetchArticlesByAuthorRequest(username);
	};

	const handleFetchFavoriteArticlesRequest = () => {
		unloadArticles();
		fetchFavoriteArticlesRequest(username);
	};
	return (
		<ProfileContainer>
			<UserInfo>
				{isEmpty(profileData) ? (
					<LoadingSpinner />
				) : (
					<React.Fragment>
						<ImageProfile src={profileData.image} />
						<Username>{profileData.username}</Username>
						<Bio>{profileData.bio}</Bio>
					</React.Fragment>
				)}
			</UserInfo>
			<ArticlesWrapper>
				<ArticlesChoice>
					<NavLinks>
						{!isEmpty(profileData) &&
						!isFetchingArticles && (
							<Fragment>
								<StyledNavLink
									isActive={() => {
										if (!path.includes('favorites')) {
											return true;
										} else return false;
									}}
									exact
									to={profileLink}
									onClick={handleFetchArticlesByAuthorRequest}
									activeStyle={styles.activeLinkStyle}
								>
									My Articles
								</StyledNavLink>
								<StyledNavLink
									sActive={() => {
										if (path.includes('favorites')) {
											return true;
										} else return false;
									}}
									to={profileLinkFavorites}
									onClick={handleFetchFavoriteArticlesRequest}
									activeStyle={styles.activeLinkStyle}
								>
									Favorited Articles
								</StyledNavLink>
							</Fragment>
						)}
					</NavLinks>
				</ArticlesChoice>
				{articleList === null ? (
					<LoadingSpinner center />
				) : articleList.length > 0 ? (
					<ArticleList articleList={articleList} />
				) : (
					<NotFoundMessage>{notFoundMessage}</NotFoundMessage>
				)}
			</ArticlesWrapper>
		</ProfileContainer>
	);
}

export default Profile;
