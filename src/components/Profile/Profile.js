import React, { Fragment, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { isEmpty } from 'lodash';

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

import ArticleList from 'components/ArticleList/ArticleList';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

function Profile({
	profileData,
	articleList,
	isFetchingArticles,
	fetchArticlesByAuthorRequest,
	fetchFavoriteArticlesRequest,
	unloadArticles,
	path
	/* 	username */
}) {
	const themeContext = useContext(ThemeContext);
	console.log(themeContext.colors.blue1);

	const { username, image, bio } = profileData || {};
	let profileLink;
	let profileLinkFavorites;
	let notFoundMessage;
	if (path.includes('articleAuthorProfile')) {
		profileLink = `/articleAuthorProfile/${username}`;
		profileLinkFavorites = `/articleAuthorProfile/${username}/favorites`;
	} else if (path.includes('userProfile')) {
		profileLink = `/userProfile/${username}`;
		profileLinkFavorites = `/userProfile/${username}/favorites`;
	}
	if (path.includes('favorites')) {
		notFoundMessage = 'No favorite articles found.';
	} else {
		notFoundMessage = 'No articles found.';
	}

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
						<ImageProfile src={image} />
						<Username>{username}</Username>
						<Bio>{bio}</Bio>
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
									exact
									isActive={() => {
										if (!path.includes('favorites')) {
											return true;
										} else return false;
									}}
									to={profileLink}
									onClick={handleFetchArticlesByAuthorRequest}
									/* 		activeStyle={themeContext.theme.activeLinkStyle} */
									activeStyle={{ ...themeContext.activeLinkStyle }}
								>
									My Articles
								</StyledNavLink>
								<StyledNavLink
									isActive={() => {
										if (path.includes('favorites')) {
											return true;
										} else return false;
									}}
									to={profileLinkFavorites}
									onClick={handleFetchFavoriteArticlesRequest}
									/* 		activeStyle={themeContext.theme.activeLinkStyle} */
									activeStyle={{ ...themeContext.activeLinkStyle }}
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
