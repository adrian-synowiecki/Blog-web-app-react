import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import * as S from './HomePage.styles';
import { fetchArticlesByMostRecentRequest, unloadArticles } from 'redux/articleList/articleList.actions';
import { fetchTagsByMostPopularRequest, removeTagName, unloadTags } from 'redux/tags/tags.actions';
import { setCurrentPageNumber } from 'redux/common/common.actions';

import ArticleList from 'components/ArticleList/ArticleList';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import TagList from 'components/TagList/TagList';
import Pagination from 'components/Pagination/Pagination';

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
		<Fragment>
			<S.HomeHeaderWrapper>
				<S.HomeHeading>conduit</S.HomeHeading>
				<S.HomeSubHeading>A place to share your knowledge</S.HomeSubHeading>
			</S.HomeHeaderWrapper>
			<S.HomeWrapper>
				<S.HomeNavLinkItem
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
				</S.HomeNavLinkItem>
				{tag && (
					<S.HomeNavLinkItem tag to="/" onClick={() => handleClick()}>
						{tag}
					</S.HomeNavLinkItem>
				)}
				{articleList === null ? (
					<LoadingSpinner center />
				) : (
					<Fragment>
						<ArticleList articleList={articleList} />
						<S.HomePagination
							currentPageNumber={currentPageNumber}
							fetchArticlesByMostRecentRequest={fetchArticlesByMostRecentRequest}
							setCurrentPageNumber={setCurrentPageNumber}
						/>
						{tagList.length > 0 && (
							<TagList tagList={tagList} arePopularTags>
								<S.HomePopularTags>Popular Tags</S.HomePopularTags>
							</TagList>
						)}
					</Fragment>
				)}
			</S.HomeWrapper>
		</Fragment>
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
