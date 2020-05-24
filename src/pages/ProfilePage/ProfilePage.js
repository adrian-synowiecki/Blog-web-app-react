import React, { Fragment, useRef, useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import Snackbar from '@material-ui/core/Snackbar';

import {
	fetchArticlesByAuthorRequest,
	fetchFavoriteArticlesRequest,
	unloadArticles
} from 'redux/articleList/articleList.actions';
import { toggleArticleSnackbar } from 'redux/common/common.actions';

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
	toggleArticleSnackbar,
	isOpenArticleSnackbar,
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

	useEffect(
		() => {
			fetchProfileByUsernameRequest(username);
			fetchArticlesByAuthorRequest(username);
			return () => {
				linkRefs.current = [];
				unloadArticles();
				unloadProfile();
				clearProfileError();
			};
		},
		[ username ]
	);
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
			if (el.offsetWidth) {
				linkRefs.current.push(el);
			}
		}
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		toggleArticleSnackbar(false);
	};

	return (
		<S.ProfilePageContainer>
			{error && <NotFound>404 Profile Not Found</NotFound>}
		{/* 	{isFetchingProfileData &&
			isEmpty(profileData) && (
				<S.CredentialsWrapper>
					<LoadingSpinner center />
				</S.CredentialsWrapper>
			)} */}
			{!isEmpty(profileData) && (
				<Fragment>
					<S.CredentialsWrapper
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { ease: 'easeOut', duration: 0.5 } }}
					>
						<S.UserImage
							src={image}
							onError={(e) =>
								(e.target.src = 'https://static.productionready.io/images/smiley-cyrus.jpg')}
						/>
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
			<Snackbar
				open={isOpenArticleSnackbar}
				autoHideDuration={5000}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
				onClose={handleClose}
			>
				<S.MuiAlert
					classes={{ fontSize: '30rem' }}
					onClose={handleClose}
					severity="success"
					elevation={6}
					variant="filled"
				>
					Article removed successfully!
				</S.MuiAlert>
			</Snackbar>
		</S.ProfilePageContainer>
	);
}
const mapStateToProps = (state) => {
	const { profileData, isFetchingProfileData, error } = state.profile;
	const { articleList } = state.articleList;
	const { isOpenArticleSnackbar } = state.common;
	return {
		profileData,
		isFetchingProfileData,
		error,
		articleList,
		isOpenArticleSnackbar
	};
};

const mapDispatchToProps = (dispatch) => ({
	fetchArticlesByAuthorRequest: (username) => dispatch(fetchArticlesByAuthorRequest(username)),
	fetchFavoriteArticlesRequest: (username) => dispatch(fetchFavoriteArticlesRequest(username)),
	fetchProfileByUsernameRequest: (username) => dispatch(fetchProfileByUsernameRequest(username)),
	unloadArticles: () => dispatch(unloadArticles()),
	unloadProfile: () => dispatch(unloadProfile()),
	clearProfileError: () => dispatch(clearProfileError()),
	toggleArticleSnackbar: (isOpenArticleSnackbar) => dispatch(toggleArticleSnackbar(isOpenArticleSnackbar))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);