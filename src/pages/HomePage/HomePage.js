import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import styles from '../../utils/styles';
import { fetchArticlesByMostRecentRequest, unloadArticles } from '../../redux/actions/articleList';
import { unloadTags, removeTagName } from '../../redux/actions/tags';
import { fetchTagsByMostPopularRequest, getTagName } from '../../redux/actions/tags';
import { fetchArticlesByTagRequest } from '../../redux/actions/articleList';

import * as S from './HomePage.styles';

import Articles from '../../components/Articles/Articles';
import ArticlePageLinks from '../../components/ArticlePageLinks/ArticlePageLinks';
import Tags from '../../components/Tags/Tags';

function HomePage({
	articleList,
	error,
	tagList,
	tag,
	fetchArticlesByMostRecentRequest,
	unloadArticles,
	unloadTags,
	removeTagName,
	fetchTagsByMostPopularRequest,
	getTagName,
	fetchArticlesByTagRequest,
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
				{error && <div>{error}</div>}
				{articleList ? <Articles articleList={articleList} /> : 'Loading articles'}
				<ArticlePageLinks fetchArticlesByMostRecentRequest={fetchArticlesByMostRecentRequest} />
				{tagList ? (
					<Tags
						fetchArticlesByTagRequest={fetchArticlesByTagRequest}
						getTagName={getTagName}
						tagList={tagList}
						isPopularTags
					/>
				) : (
					'Loading tags'
				)}
			</S.Row>
		</S.HomeContainer>
	);
}

const mapStateToProps = ({ articleList: { articleList, error }, tags: { tagList, tag } }) => ({
	articleList,
	error,
	tagList,
	tag
});

const mapDispatchToProps = (dispatch) => {
	return {
		fetchArticlesByMostRecentRequest: (offSet) => dispatch(fetchArticlesByMostRecentRequest(offSet)),
		unloadArticles: () => dispatch(unloadArticles()),
		unloadTags: () => dispatch(unloadTags()),
		removeTagName: () => dispatch(removeTagName()),
		fetchTagsByMostPopularRequest: () => dispatch(fetchTagsByMostPopularRequest()),
		fetchArticlesByTagRequest: (tag) => dispatch(fetchArticlesByTagRequest(tag)),
		getTagName: (tag) => dispatch(getTagName(tag))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
