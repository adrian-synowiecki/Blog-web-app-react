import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

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
	const location = useLocation();
	useEffect(() => {
		/* window.localStorage.clear('offset') */
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
	console.log(location.pathname)
	return (
		<Fragment>
			<S.Header>
				<S.Heading>conduit</S.Heading>
				<S.SubHeading>A place to share your knowledge</S.SubHeading>
			</S.Header>
			<S.Wrapper>
				<S.NavLinkItem
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
				</S.NavLinkItem>
				{tag && (
					<S.NavLinkItem tag to="/" onClick={() => handleClick()}>
						{tag}
					</S.NavLinkItem>
				)}
				{articleList === null ? (
					<LoadingSpinner center />
				) : (
					articleList.length > 0 && (
						<Fragment>
							<ArticleList articleList={articleList} />
							<S.Pagination
								currentPageNumber={currentPageNumber}
								fetchArticlesByMostRecentRequest={fetchArticlesByMostRecentRequest}
								setCurrentPageNumber={setCurrentPageNumber}
							/>
							{tagList.length > 0 && (
								<TagList tagList={tagList} arePopularTags>
									<S.PopularTags>Popular Tags</S.PopularTags>
								</TagList>
							)}
						</Fragment>
					)
				)}
			</S.Wrapper>
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
