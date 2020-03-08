import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import colors from '../../utils/colors';
import { fetchArticleRequested, fetchArticleUnmounted } from '../../redux/actions/singleArticle';
import { fetchCommentsFromArticleRequested, fetchCommentsFromArticleUnmounted } from '../../redux/actions/comments';
import { unloadArticle } from '../../redux/actions/singleArticle';

import ArticleMeta from '../../components/ArticleMeta/ArticleMeta';
import Header from '../../components/Header/Header';
import Comment from '../../components/Comment/Comment';
import CommentForm from '../../components/CommentForm/CommentForm';
import Comments from '../../components/Comments/Comments';
import Tags from '../../components/Tags/Tags';

import { FullArticleText, Paragraph } from './ArticleOverview.style';

function ArticleOverview({
	match,
	fetchArticleRequested,
	articleContent,
	isFetchingSingleArticleData,
	fetchArticles,
	fetchCommentsFromArticleRequested,
	currentUserData,
	commentsList,
	fetchSingleArticleUnmounted,
	fetchCommentsFromArticleUnmounted,
	unloadArticle,
	tagList
}) {
	/* 	useEffect(() => {
		fetchArticles();
	
		 fetchCommentsFromArticles(selectedArticle.slug);
		
	}, []); */
	/* console.log(match.params.articleSlug); */
	useEffect(() => {
		fetchArticleRequested(match.params.articleSlug);
		fetchCommentsFromArticleRequested(match.params.articleSlug);
		return () => {
			unloadArticle();
		};
	}, []);

	const canModify =
		!isEmpty(currentUserData) &&
		!isEmpty(articleContent) &&
		currentUserData.username === articleContent.author.username;
	/* 	 	console.log(commentsList); */

	console.log(commentsList);
	return (
		<div>
			{!isEmpty(articleContent) && (
				<React.Fragment>
					<Header
						singleArticleHeader
						singleArticle={articleContent}
						title={articleContent.title}
						canModify={canModify}
					/>
					<ArticleMeta singleArticleMeta articleContent={articleContent} />
					<FullArticleText>{articleContent.body}</FullArticleText>
					<Tags tagList={tagList} />
					{isEmpty(currentUserData) ? (
						<Paragraph>
							<span style={{ color: colors.green }}>Sign in</span> or{' '}
							<span style={{ color: colors.green }}>sign up</span> to add comments on this article
						</Paragraph>
					) : (
						<CommentForm /* articleContent={articleContent} */ /* commentsList={commentsList} */ />
					)}
					<Comments commentsList={commentsList} />
				</React.Fragment>
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		articleContent: state.singleArticle.articleContent,
		tagList: state.singleArticle.articleContent.tagList,
		isFetchingArticleContent: state.singleArticle.isFetchingArticleContent,
		currentUserData: state.currentUser.currentUserData,
		commentsList: state.comments.commentsList
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchArticleRequested: (slug) => dispatch(fetchArticleRequested(slug)),
		fetchCommentsFromArticleRequested: (slug) => dispatch(fetchCommentsFromArticleRequested(slug)),
		unloadArticle: () => dispatch(unloadArticle())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleOverview);
