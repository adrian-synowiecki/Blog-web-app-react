import React, { Fragment, useRef, useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import { isEmpty } from 'lodash';

import {
	fetchArticlesByAuthorRequest,
	fetchFavoriteArticlesRequest,
	unloadArticles
} from 'redux/articleList/articleList.actions';

import { fetchProfileByUsernameRequest, unloadProfile, clearProfileError } from 'redux/profile/profile.actions';

import * as S from './ProfilePage.style';

import ArticleList from 'components/ArticleList/ArticleList';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import NotFound from 'components/NotFound/NotFound';

function ProfilePage({
	articleList,
	profileData,
	error,
	isFetchingProfileData,
	fetchArticlesByAuthorRequest,
	fetchFavoriteArticlesRequest,
	clearProfileError,
	fetchProfileByUsernameRequest,
	unloadArticles,
	unloadProfile
}) {
	const [ widths, setWidths ] = useState([]);
	const [ leftMargins, setLeftMargins ] = useState([]);
	let linkRefs = useRef([]);
	const { username } = useParams();
	let location = useLocation();
	const { image, bio } = profileData;

	useEffect(() => {
		fetchProfileByUsernameRequest(username);
		fetchArticlesByAuthorRequest(username);
		return () => {
			unloadArticles();
			unloadProfile();
			clearProfileError();
		};
	}, []);

	useEffect(
		() => {
			setWidths(linkRefs.current.map((ref) => ref.offsetWidth));
			setLeftMargins(linkRefs.current.map((ref) => ref.offsetLeft));
		},
		[ profileData ]
	);

	let notFoundMessage;
	if (location.pathname.includes('favorites')) {
		notFoundMessage = 'No favorite articles found.';
	} else {
		notFoundMessage = 'No articles found.';
	}

	const handleFetchingArticlesByAuthorRequest = () => {
		unloadArticles();
		fetchArticlesByAuthorRequest(username);
	};

	const handleFetchingFavoriteArticlesRequest = () => {
		unloadArticles();
		fetchFavoriteArticlesRequest(username);
	};

	const addToLinkRefs = (el) => {
		if (el && !linkRefs.current.includes(el)) {
			linkRefs.current.push(el);
		}
	};

	return (
		<S.ProfilePageContainer>
			{error && (
				<NotFound hasError clearError={clearProfileError}>
					404 Profile Not Found
				</NotFound>
			)}
			{isFetchingProfileData && (
				<S.CredentialsWrapper>
					<LoadingSpinner center />
				</S.CredentialsWrapper>
			)}
			{!isEmpty(profileData) && (
				<Fragment>
					<S.CredentialsWrapper>
						<S.UserImage src={image} />
						<S.Username>{profileData.username}</S.Username>
						<S.Bio>{bio}</S.Bio>
					</S.CredentialsWrapper>
					<S.Wrapper>
						<S.NavLink
							to={`/profile/${profileData.username}`}
							onClick={handleFetchingArticlesByAuthorRequest}
							ref={addToLinkRefs}
							width={widths[0]}
							marginLeft={leftMargins[0]}
							onClick={handleFetchingArticlesByAuthorRequest}
							exact
						>
							My Articles
						</S.NavLink>
						<S.NavLink
							to={`/profile/${profileData.username}/favorites`}
							onClick={handleFetchingFavoriteArticlesRequest}
							ref={addToLinkRefs}
							width={widths[1]}
							marginLeft={leftMargins[1]}
						>
							Favorited Articles
						</S.NavLink>
						<S.NavLinkUnderline />
						{articleList === null ? (
							<LoadingSpinner center />
						) : articleList.length > 0 ? (
							<ArticleList articleList={articleList} />
						) : (
							<S.NotFoundMessage>{notFoundMessage}</S.NotFoundMessage>
						)}
					</S.Wrapper>
				</Fragment>
			)}
		</S.ProfilePageContainer>
	);
}
const mapStateToProps = (state) => ({
	articleList: state.articleList.articleList,
	profileData: state.profile.profileData,
	isFetchingProfileData: state.profile.isFetchingProfileData,
	error: state.profile.error
});

const mapDispatchToProps = (dispatch) => ({
	fetchArticlesByAuthorRequest: (username) => dispatch(fetchArticlesByAuthorRequest(username)),
	fetchFavoriteArticlesRequest: (username) => dispatch(fetchFavoriteArticlesRequest(username)),
	fetchProfileByUsernameRequest: (username) => dispatch(fetchProfileByUsernameRequest(username)),
	unloadArticles: () => dispatch(unloadArticles()),
	unloadProfile: () => dispatch(unloadProfile()),
	clearProfileError: () => dispatch(clearProfileError())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
