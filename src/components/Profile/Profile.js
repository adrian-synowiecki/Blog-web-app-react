import React, { Fragment, useRef, useState, useEffect } from 'react';
import { isEmpty } from 'lodash';

import * as S from './Profile.style';

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
}) {
	const [ widths, setWidths ] = useState([]);
	const [ leftMargins, setLeftMargins ] = useState([]);
	let linkRefs = useRef([]);
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

	useEffect(() => {
		setWidths(linkRefs.current.map((ref) => ref.offsetWidth));
		setLeftMargins(linkRefs.current.map((ref) => ref.offsetLeft));
	}, []);

	const handleFetchArticlesByAuthorRequest = () => {
		unloadArticles();
		fetchArticlesByAuthorRequest(username);
	};

	const handleFetchFavoriteArticlesRequest = () => {
		unloadArticles();
		fetchFavoriteArticlesRequest(username);
	};

	const addToLinkRefs = (el) => {
		if (el && !linkRefs.current.includes(el)) {
			linkRefs.current.push(el);
		}
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
						<Fragment>
							<S.NavLinkExtended
								ref={addToLinkRefs}
								width={widths[0]}
								marginLeft={leftMargins[0]}
								exact
								isActive={() => {
									if (!path.includes('favorites')) {
										return true;
									} else return false;
								}}
								to={profileLink}
								onClick={handleFetchArticlesByAuthorRequest}
							>
								My Articles
							</S.NavLinkExtended>
							<S.NavLinkExtended
								ref={addToLinkRefs}
								width={widths[1]}
								marginLeft={leftMargins[1]}
								isActive={() => {
									if (path.includes('favorites')) {
										return true;
									} else return false;
								}}
								to={profileLinkFavorites}
								onClick={handleFetchFavoriteArticlesRequest}
							>
								Favorited Articles
							</S.NavLinkExtended>
							<S.NavLinkUnderline />
						</Fragment>
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
