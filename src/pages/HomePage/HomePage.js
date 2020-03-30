import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import * as S from './HomePage.styles';
import {
	fetchArticlesByMostRecentRequest,
	addArticleToFavoritesRequest,
	removeArticleFromFavoritesRequest,
	fetchArticlesByTagRequest,
	unloadArticles
} from 'redux/articleList/articleList.actions';
import { fetchTagsByMostPopularRequest, getTagName, removeTagName, unloadTags } from 'redux/tags/tags.actions';
import { setCurrentPageNumber } from 'redux/common/common.actions';
import { logOut } from 'redux/user/user.actions';

import Header from 'components/Header/Header';
import ArticleList from 'components/ArticleList/ArticleList';
import Pagination from 'components/Pagination/Pagination';
import Tags from 'components/TagList/TagList';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import Button from 'components/Button/Button';

function HomePage({
	articleList,
	tagList,
	tag,
	currentPageNumber,
	setCurrentPageNumber,
	logOut,
	addArticleToFavoritesRequest,
	removeArticleFromFavoritesRequest,
	fetchTagsByMostPopularRequest,
	fetchArticlesByTagRequest,
	fetchArticlesByMostRecentRequest,
	removeTagName,
	getTagName,
	unloadArticles,
	unloadTags
}) {
	useEffect(() => {
		fetchArticlesByMostRecentRequest(window.localStorage.getItem('offSet'));
		fetchTagsByMostPopularRequest();
		return () => {
			unloadArticles();
			unloadTags();
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const handleClick = () => {
		removeTagName();
		fetchArticlesByMostRecentRequest(window.localStorage.getItem('offSet'));
	};

	return (
		<S.HomeContainer>
			{/* 	<S.Header>
				<S.HeadingsWrapper>
					<S.Heading>conduit</S.Heading>
					<S.SubHeading>A place to share your knowledge</S.SubHeading>
				</S.HeadingsWrapper>
			</S.Header> */}
			<Header>
				<S.HeadingsWrapper>
					<S.Heading>conduit</S.Heading>
					<S.SubHeading>A place to share your knowledge</S.SubHeading>
				</S.HeadingsWrapper>
			</Header>
			<S.NavigationWrapper>
				<S.NavLinkExtended
					onClick={() => handleClick()}
					to="/"
					/* 	activeStyle={styles.activeLinkStyle} */
					isActive={() => {
						if (tag) {
							return false;
						}
						return true;
					}}
				>
					Global Feed
				</S.NavLinkExtended>
				{tag && (
					<S.NavLinkExtended
						tag
						to="/"
						/*  activeStyle={styles.activeLinkStyle} */ onClick={() => handleClick()}
					>
						{tag}
					</S.NavLinkExtended>
				)}
				<Button onClick={() => logOut()}>LOG OUT</Button>
			</S.NavigationWrapper>
			<S.Row>
				{articleList === null ? (
					<LoadingSpinner center />
				) : (
					<Fragment>
						<ArticleList
							articleList={articleList}
							addArticleToFavoritesRequest={addArticleToFavoritesRequest}
							removeArticleFromFavoritesRequest={removeArticleFromFavoritesRequest}
						/>
						<Pagination
							currentPageNumber={currentPageNumber}
							fetchArticlesByMostRecentRequest={fetchArticlesByMostRecentRequest}
							setCurrentPageNumber={setCurrentPageNumber}
						/>
						{tagList.length > 0 && (
							<Tags
								tagList={tagList}
								fetchArticlesByTagRequest={fetchArticlesByTagRequest}
								getTagName={getTagName}
							/>
						)}
					</Fragment>
				)}
			</S.Row>
		</S.HomeContainer>
	);
}

const mapStateToProps = (state) => ({
	articleList: state.articleList.articleList,
	tagList: state.tags.tagList,
	tag: state.tags.tag,
	currentPageNumber: state.common.currentPageNumber
});

const mapDispatchToProps = (dispatch) => ({
	fetchArticlesByMostRecentRequest: (offSet) => dispatch(fetchArticlesByMostRecentRequest(offSet)),
	fetchArticlesByTagRequest: (tag) => dispatch(fetchArticlesByTagRequest(tag)),
	addArticleToFavoritesRequest: (articleSlug) => dispatch(addArticleToFavoritesRequest(articleSlug)),
	removeArticleFromFavoritesRequest: (articleSlug) => dispatch(removeArticleFromFavoritesRequest(articleSlug)),
	unloadArticles: () => dispatch(unloadArticles()),
	fetchTagsByMostPopularRequest: () => dispatch(fetchTagsByMostPopularRequest()),
	getTagName: (tag) => dispatch(getTagName(tag)),
	removeTagName: () => dispatch(removeTagName()),
	unloadTags: () => dispatch(unloadTags()),
	setCurrentPageNumber: (currentPageNumber) => dispatch(setCurrentPageNumber(currentPageNumber)),
	logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
