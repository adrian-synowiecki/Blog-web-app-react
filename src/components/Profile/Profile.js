import React, { Fragment, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { isEmpty } from 'lodash';

import * as S from './Profile.style';

import ArticleList from 'components/ArticleList/ArticleList'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'

function Profile({
	profileData,
	articleList,
	isFetchingArticles,
	fetchArticlesByAuthorRequest,
	fetchFavoriteArticlesRequest,
	unloadArticles,
	path
}) {
	const themeContext = useContext(ThemeContext);
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
		<S.ProfileContainer>
			<S.UserInfo>
				{isEmpty(profileData) ? (
					<LoadingSpinner />
				) : (
					<React.Fragment>
						<S.ImageProfile src={image} />
						<S.Username>{username}</S.Username>
						<S.Bio>{bio}</S.Bio>
					</React.Fragment>
				)}
			</S.UserInfo>
			<S.ArticlesWrapper>
				<S.ArticlesChoice>
					<S.NavLinks>
						{!isEmpty(profileData) &&
						!isFetchingArticles && (
							<Fragment>
								<S.NavLinkExtended
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
								</S.NavLinkExtended>
								<S.NavLinkExtended
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
								</S.NavLinkExtended>
							</Fragment>
						)}
					</S.NavLinks>
				</S.ArticlesChoice>

				{articleList === null ? (
					<LoadingSpinner center />
				) : articleList.length > 0 ? (
					<ArticleList articleList={articleList} />
				) : (
					<S.NotFoundMessage>{notFoundMessage}</S.NotFoundMessage>
				)}
			</S.ArticlesWrapper>
		</S.ProfileContainer>
	);
}

export default Profile;
