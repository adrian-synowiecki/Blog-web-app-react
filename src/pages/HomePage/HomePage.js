import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import styles from '../../utils/styles';
import { fetchArticlesByMostRecentRequest, unloadArticles } from '../../redux/articleList/articleList.actions';
import { unloadTags, removeTagName } from '../../redux/tags/tags.actions';
import { fetchTagsByMostPopularRequest, getTagName } from '../../redux/tags/tags.actions';
import { fetchArticlesByTagRequest } from '../../redux/articleList/articleList.actions';
import { setCurrentPageNumber } from '../../redux/common/common.actions';

import * as S from './HomePage.styles';

import ArticleList from '../../components/ArticleList/ArticleList';
import Pagination from '../../components/Pagination/Pagination';
import Tags from '../../components/Tags/Tags';

function HomePage({
	articleList,
	error,
	tagList,
	tag,
	fetchTagsByMostPopularRequest,
	fetchArticlesByTagRequest,
	removeTagName,
	getTagName,
	unloadArticles,
	unloadTags,
	fetchArticlesByMostRecentRequest,
	setCurrentPageNumber,
	currentPageNumber
}) {
	useEffect(() => {
		fetchArticlesByMostRecentRequest(window.localStorage.getItem('offSet'));
		fetchTagsByMostPopularRequest();
		return () => {
			unloadArticles();
			unloadTags();
		};
	}, []);

	const handleClick = () => {
		removeTagName();
		fetchArticlesByMostRecentRequest(window.localStorage.getItem('offSet'));
	};

	return (
		<S.HomeContainer>
			<S.Header>
				<S.HeadingsWrapper>
					<S.Heading>conduit</S.Heading>
					<S.SubHeading>A place to share your knowledge</S.SubHeading>
				</S.HeadingsWrapper>
			</S.Header>
			<S.NavigationWrapper>
				<S.NavLinkExtended
					onClick={() => handleClick()}
					to="/"
					activeStyle={styles.activeLinkStyle}
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
					<S.NavLinkExtended tag to="/" activeStyle={styles.activeLinkStyle} onClick={() => handleClick()}>
						{tag}
					</S.NavLinkExtended>
				)}
			</S.NavigationWrapper>
			<S.Row>
				{error && <div>{error.message}</div>}
				{articleList.length > 0 ? <ArticleList articleList={articleList} /> : 'Loading articles'}
				<Pagination
					currentPageNumber={currentPageNumber}
					fetchArticlesByMostRecentRequest={fetchArticlesByMostRecentRequest}
					setCurrentPageNumber={setCurrentPageNumber}
				/>
				{tagList.length > 0 ? (
					<Tags
						tagList={tagList}
						fetchArticlesByTagRequest={fetchArticlesByTagRequest}
						getTagName={getTagName}
						isPopularTags
					/>
				) : (
					'Loading tags'
				)}
			</S.Row>
		</S.HomeContainer>
	);
}

const mapStateToProps = ({ articleList: { articleList, error }, tags: { tagList, tag }, common: {currentPageNumber} }) => ({
	articleList,
	error,
	tagList,
	tag,
	currentPageNumber
});

const mapDispatchToProps = (dispatch) => ({
	fetchArticlesByMostRecentRequest: (offSet) => dispatch(fetchArticlesByMostRecentRequest(offSet)),
	fetchTagsByMostPopularRequest: () => dispatch(fetchTagsByMostPopularRequest()),
	getTagName: (tag) => dispatch(getTagName(tag)),
	removeTagName: () => dispatch(removeTagName()),
	unloadArticles: () => dispatch(unloadArticles()),
	unloadTags: () => dispatch(unloadTags()),
	fetchArticlesByTagRequest: (tag) => dispatch(fetchArticlesByTagRequest(tag)),
	setCurrentPageNumber: (currentPageNumber) => dispatch(setCurrentPageNumber(currentPageNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
