import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { useParams, Link } from 'react-router-dom';

import * as S from './MainPage.style';
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
import NotFound from 'components/NotFound/NotFound';

function MainPage({
	articleList,
	tagList,
	offSet,
	articlesCount,
	setOffSet,
	fetchTagsByMostPopularRequest,
	fetchArticlesByTagRequest,
	fetchArticlesByMostRecentRequest,
	removeTagName,
	unloadArticles,
	unloadTags,
	push
}) {
	const { tag, currentPageNumber } = useParams();
	useEffect(
		() => {
			handlePageChange(currentPageNumber);
			fetchTagsByMostPopularRequest();
			return () => {
				unloadArticles();
				unloadTags();
			};
		},
		[ currentPageNumber, tag ]
	); // eslint-disable-line react-hooks/exhaustive-deps

	const handleClick = () => {
		removeTagName();
		fetchArticlesByMostRecentRequest(offSet);
	};

	const handlePageChange = (currentPageNumber) => {
		const numberOfArticlesOnPage = 20;
		const offSet = currentPageNumber === 1 ? 0 : (currentPageNumber - 1) * numberOfArticlesOnPage;
		if (tag) {
			fetchArticlesByTagRequest(tag, offSet);
		} else fetchArticlesByMostRecentRequest(offSet);
		setOffSet(offSet);
	};

	return (
		<S.MainPageContainer>
			<S.Header>
				<S.Heading
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ease: 'easeOut', duration: 0.5 }}
				>
					conduit
				</S.Heading>
				<S.SubHeading
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ease: 'easeOut', duration: 0.5 }}
				>
					A place to share your knowledge
				</S.SubHeading>
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
					whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
				>
					Global Feed
				</S.NavLinkItem>
				{tag && (
					<S.NavLinkItem
						tag
						to="/"
						onClick={() => handleClick()}
						whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
					>
						{tag}
					</S.NavLinkItem>
				)}
				{articleList === null ? (
					<LoadingSpinner center />
				) : articleList.length > 0 ? (
					<Fragment>
						<ArticleList articleList={articleList} />
						<S.Pagination
							currentPageNumber={currentPageNumber}
							articlesCount={articlesCount}
							articleList={articleList}
							tag={tag}
						/>
						{tagList.length > 0 && (
							<TagList tagList={tagList}>
								<S.PopularTags>Popular Tags</S.PopularTags>
							</TagList>
						)}
					</Fragment>
				) : tag && articleList.length === 0 ? (
					<NotFound> No Articles Has Been Created Under {tag} tag</NotFound>
				) : (
					push('/')
				)}
			</S.Wrapper>
		</S.MainPageContainer>
	);
}

const mapStateToProps = (state) => {
	const { articleList, articlesCount } = state.articleList;
	const { tag, tagList } = state.tags;
	const { offSet } = state.common;
	return {
		articleList,
		articlesCount,
		tagList,
		tag,
		offSet
	};
};
const mapDispatchToProps = (dispatch) => ({
	fetchArticlesByMostRecentRequest: (offSet) => dispatch(fetchArticlesByMostRecentRequest(offSet)),
	fetchArticlesByTagRequest: (tag, offSet) => dispatch(fetchArticlesByTagRequest(tag, offSet)),
	unloadArticles: () => dispatch(unloadArticles()),
	fetchTagsByMostPopularRequest: () => dispatch(fetchTagsByMostPopularRequest()),
	removeTagName: () => dispatch(removeTagName()),
	unloadTags: () => dispatch(unloadTags()),
	setOffSet: (offSet) => dispatch(setOffSet(offSet)),
	push: (path) => dispatch(push(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
