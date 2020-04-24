import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import * as S from './HomePage.styles';
import { fetchArticlesByMostRecentRequest, unloadArticles } from 'redux/articleList/articleList.actions';
import { fetchTagsByMostPopularRequest, removeTagName, unloadTags } from 'redux/tags/tags.actions';
import { setCurrentPageNumber } from 'redux/common/common.actions';

import Header from 'components/Header/Header';
import ArticleList from 'components/ArticleList/ArticleList';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

function HomePage({
	articleList,
	tagList,
	tag,
	currentPageNumber,
	setCurrentPageNumber,
	fetchTagsByMostPopularRequest,
	fetchArticlesByMostRecentRequest,
	removeTagName,
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
					<S.NavLinkExtended tag to="/" onClick={() => handleClick()}>
						{tag}
					</S.NavLinkExtended>
				)}
			</S.NavigationWrapper>
			<S.FlexHomeWrapper>
				{articleList === null ? (
					<LoadingSpinner center />
				) : (
					<Fragment>
						<ArticleList articleList={articleList} />
						<S.PaginationExtended
							currentPageNumber={currentPageNumber}
							fetchArticlesByMostRecentRequest={fetchArticlesByMostRecentRequest}
							setCurrentPageNumber={setCurrentPageNumber}
						/>
						{tagList.length > 0 && (
							<S.TagListExtended tagList={tagList} arePopularTags>
								<S.PopularTags>Popular Tags</S.PopularTags>
							</S.TagListExtended>
						)}
					</Fragment>
				)}
			</S.FlexHomeWrapper>
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
	unloadArticles: () => dispatch(unloadArticles()),
	fetchTagsByMostPopularRequest: () => dispatch(fetchTagsByMostPopularRequest()),
	removeTagName: () => dispatch(removeTagName()),
	unloadTags: () => dispatch(unloadTags()),
	setCurrentPageNumber: (currentPageNumber) => dispatch(setCurrentPageNumber(currentPageNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
