import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import colors from '../../utils/colors';
import { fetchArticleRequest } from '../../redux/actions/article';
import { fetchCommentsFromArticleRequest } from '../../redux/actions/comments';
import { unloadArticle } from '../../redux/actions/article';

import ArticleMeta from '../../components/ArticleMeta/ArticleMeta';
import Header from '../../components/Header/Header';
import Comment from '../../components/Comment/Comment';
import CommentForm from '../../components/CommentForm/CommentForm';
import Comments from '../../components/Comments/Comments';
import Tags from '../../components/Tags/Tags';

import { FullArticleText, Paragraph } from './ArticleOverview.style';

function ArticleOverview({
	match,
	fetchArticleRequest,
	articleData,
	fetchCommentsFromArticleRequest,
	currentUserData,
	unloadArticle,
	commentList
}) {
	const { body, tagList, author, title } = articleData;
	/* 	useEffect(() => {
		fetchArticles();
	
		 fetchCommentsFromArticles(selectedArticle.slug);
		
	}, []); */
	/* console.log(match.params.articleSlug); */
	useEffect(() => {
		fetchArticleRequest(match.params.articleSlug);
		fetchCommentsFromArticleRequest(match.params.articleSlug);
		return () => {
			unloadArticle();
		};
	}, []);

	const canModify =
		!isEmpty(currentUserData) && !isEmpty(articleData) && currentUserData.username === author.username;
	/* 	 	console.log(commentsList); */

	return (
		<div>
			{!isEmpty(articleData) && (
				<React.Fragment>
					<Header ArticleHeader articleData={articleData} title={title} canModify={canModify} />
					<ArticleMeta ArticleMeta articleData={articleData} />
					<FullArticleText>{body}</FullArticleText>
					<Tags tagList={tagList} />
					{isEmpty(currentUserData) ? (
						<Paragraph>
							<span style={{ color: colors.green }}>Sign in</span> or{' '}
							<span style={{ color: colors.green }}>sign up</span> to add comments on this article
						</Paragraph>
					) : (
						<CommentForm articleData={articleData} commentList={commentList}  />
					)}
					<Comments commentList={commentList} />
				</React.Fragment>
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		articleData: state.article.articleData,
		currentUserData: state.currentUser.currentUserData,
		commentList: state.comments.commentList
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchArticleRequest: (articleSlug) => dispatch(fetchArticleRequest(articleSlug)),
		fetchCommentsFromArticleRequest: (articleSlug) => dispatch(fetchCommentsFromArticleRequest(articleSlug)),
		unloadArticle: () => dispatch(unloadArticle())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleOverview);
