import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {isEmpty} from 'lodash'

import styles from '../../utils/styles';
import { fetchArticlesByMostRecentRequested, unloadArticles } from '../../redux/actions/articles';
import { unloadTags, removeTagName } from '../../redux/actions/tags';
import { fetchTagsByMostPopularRequested, getTagName } from '../../redux/actions/tags';
import { fetchArticlesByTagRequested } from '../../redux/actions/articles';

import * as S from './HomePage.styles';

import Articles from '../../components/Articles/Articles';
import ArticlePageLinks from '../../components/ArticlePageLinks/ArticlePageLinks';
import Tags from '../../components/Tags/Tags';

function HomePage({
	articlesList,
	tagsList,
	fetchArticlesByMostRecentRequested,
	unloadArticles,
	unloadTags,
	tag,
	removeTagName,
	isFetchingArticlesList,
	articlesListError,
	fetchTagsByMostPopularRequested,
	getTagName,
	fetchArticlesByTagRequested,
	user
}) {

	useEffect(() => {
		fetchArticlesByMostRecentRequested(window.localStorage.getItem('offSet'));
		fetchTagsByMostPopularRequested();
		return () => {
			unloadArticles();
			unloadTags();
		};
	}, []);
	if (isEmpty(user)) {
		console.log('EMPTYYYYYYYYY')
	} else {
		console.log('NOT EMPTY')
	}
	console.log(user)
	const onGlobalFeedClickHandle = () => {
		removeTagName();
		fetchArticlesByMostRecentRequested(window.localStorage.getItem('offSet'));
	};

	const onTagClickHandle = () => {
		removeTagName();
		fetchArticlesByMostRecentRequested(window.localStorage.getItem('offSet'));
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
					onClick={() => onGlobalFeedClickHandle()}
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
					<S.NavLinkExtended
						tag
						to="/"
						activeStyle={styles.activeLinkStyle}
						onClick={() => onTagClickHandle()}
					>
						{tag}
					</S.NavLinkExtended>
				)}
			</S.NavigationWrapper>

			<S.Row>
				{articlesListError && <div>{articlesListError}</div>}
				{isFetchingArticlesList ? (
					<S.Paragraph>Loading...</S.Paragraph>
				) : (
					<Articles articlesList={articlesList} />
				)}
				<ArticlePageLinks fetchArticlesByMostRecentRequested={fetchArticlesByMostRecentRequested} />
				<Tags
					fetchArticlesByTagRequested={fetchArticlesByTagRequested}
					getTagName={getTagName}
					tagList={tagsList}
					isPopularTags
				/>
		
			</S.Row>
		</S.HomeContainer>
	);
}

const mapStateToProps = (state) => {
	return {
		articlesList: state.articles.articlesList,
		isFetchingArticlesList: state.articles.isFetchingArticlesList,
		articlesListError: state.articles.articlesListError,
		tagsList: state.tags.tagsList,
		tag: state.tags.tag,
		user: state.user
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchArticlesByMostRecentRequested: (offSet) => dispatch(fetchArticlesByMostRecentRequested(offSet)),
		unloadArticles: () => dispatch(unloadArticles()),
		unloadTags: () => dispatch(unloadTags()),
		removeTagName: () => dispatch(removeTagName()),

		fetchTagsByMostPopularRequested: () => dispatch(fetchTagsByMostPopularRequested()),
		fetchArticlesByTagRequested: (tag) => dispatch(fetchArticlesByTagRequested(tag)),
		getTagName: (tag) => dispatch(getTagName(tag))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
