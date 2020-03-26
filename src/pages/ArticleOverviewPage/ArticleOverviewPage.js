import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';

import colors from '../../utils/colors';
import { fetchArticleRequest } from '../../redux/article/article.actions';
import {
	fetchCommentsFromArticleRequest,
	addCommentToArticleRequest,
	removeCommentFromArticleRequest
} from '../../redux/comments/comments.actions';
import { unloadArticle } from '../../redux/article/article.actions';

import ArticleMeta from '../../components/ArticleMeta/ArticleMeta';
import Header from '../../components/Header/Header';
import CommentForm from '../../components/CommentForm/CommentForm';
import Comments from '../../components/Comments/Comments';
import Tags from '../../components/Tags/Tags';

import { FullArticleText, Paragraph } from './ArticleOverviewPage.style';

function ArticleOverviewPage({
	articleData,
	currentUserData,
	commentList,
	fetchArticleRequest,
	fetchCommentsFromArticleRequest,
	addCommentToArticleRequest,
	unloadArticle
}) {
	const { articleSlug } = useParams();
	const { body, tagList, author, title } = articleData;

	useEffect(() => {
		fetchArticleRequest(articleSlug);
		fetchCommentsFromArticleRequest(articleSlug);
		return () => {
			unloadArticle();
		};
	}, []);

	const canModify =
		!isEmpty(currentUserData) && !isEmpty(articleData) && currentUserData.username === author.username;

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
						<CommentForm addCommentToArticleRequest={addCommentToArticleRequest} />
					)}
					<Comments
						currentUserData={currentUserData}
						commentList={commentList}
						removeCommentFromArticleRequest={removeCommentFromArticleRequest}
					/>
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
		unloadArticle: () => dispatch(unloadArticle()),
		fetchCommentsFromArticleRequest: (articleSlug) => dispatch(fetchCommentsFromArticleRequest(articleSlug)),
		addCommentToArticleRequest: (commentObj, slug) => dispatch(addCommentToArticleRequest(commentObj, slug)),
		removeCommentFromArticleRequest: (commentData, slug, commentId) =>
			dispatch(removeCommentFromArticleRequest(commentData, slug, commentId))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleOverviewPage);
