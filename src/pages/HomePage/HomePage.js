import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
/* import { animateScroll as scroll } from 'react-scroll'; */

import * as S from './HomePage.styles';
import {
	fetchArticlesByMostRecentRequest,
	fetchArticlesByTagRequest,
	unloadArticles
} from 'redux/articleList/articleList.actions';
import { fetchTagsByMostPopularRequest, removeTagName, unloadTags } from 'redux/tags/tags.actions';
import { setOffSet } from 'redux/common/common.actions';

import ArticleList from 'components/ArticleList/ArticleList';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import TagList from 'components/TagList/TagList';

function HomePage({
	articleList,
	tagList,
	tag,
	offSet,
	articlesCount,
	setOffSet,
	fetchTagsByMostPopularRequest,
	fetchArticlesByTagRequest,
	fetchArticlesByMostRecentRequest,
	removeTagName,
	unloadArticles,
	unloadTags
}) {
	let { currentPageNumber } = useParams();
	useEffect(
		() => {
			handlePageChange(currentPageNumber);
			fetchTagsByMostPopularRequest();
			return () => {
				unloadArticles();
				unloadTags();
			};
		},
		[ currentPageNumber ]
	); // eslint-disable-line react-hooks/exhaustive-deps

	const handleClick = () => {
		removeTagName();
		unloadArticles();
		fetchArticlesByMostRecentRequest(offSet);
	};

	const handlePageChange = (currentPageNumber) => {
		const offSet = currentPageNumber === 1 ? 0 : (currentPageNumber - 1) * 20;
		if (tag) {
			fetchArticlesByTagRequest(tag, offSet);
		} else fetchArticlesByMostRecentRequest(offSet);
		setOffSet(offSet);
	};

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
								articlesCount={articlesCount}
								articleList={articleList}
							/>
							{tagList.length > 0 && (
								<TagList tagList={tagList}>
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
	offSet: state.common.offSet,
	articlesCount: state.articleList.articlesCount
});

const mapDispatchToProps = (dispatch) => ({
	fetchArticlesByMostRecentRequest: (offSet) => dispatch(fetchArticlesByMostRecentRequest(offSet)),
	fetchArticlesByTagRequest: (tag, offSet) => dispatch(fetchArticlesByTagRequest(tag, offSet)),
	unloadArticles: () => dispatch(unloadArticles()),
	fetchTagsByMostPopularRequest: () => dispatch(fetchTagsByMostPopularRequest()),
	removeTagName: () => dispatch(removeTagName()),
	unloadTags: () => dispatch(unloadTags()),
	setOffSet: (offSet) => dispatch(setOffSet(offSet))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
