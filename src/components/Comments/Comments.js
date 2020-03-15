import React, { useEffect } from 'react';
import { Formik, Field } from 'formik';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
	fetchCommentsFromArticleRequest,
	addCommentToArticleRequest,
	removeCommentFromArticleRequest
} from '../../redux/comments/comments.actions';

import {
	CommentContainer,
	CommentContent,
	CommentBlock,
	CommentFooter,
	CommentImage,
	CommentUsername,
	CommentCreatedAt,
	DeleteComment
} from './Comments.style.js';

function Comment({
	currentUserData,
	commentList,
	fetchCommentsFromArticleRequest,
	addCommentToArticleRequest,
	removeCommentFromArticleRequest
}) {
	const { articleSlug } = useParams();

	/* 	useEffect(() => {
		fetchcommentFromArticles(selectedArticle.slug);
	}, []); */

	return (
		<CommentContainer>
			{commentList.length > 0 &&
				commentList.map((commentData) => (
					<CommentContent key={commentData.id}>
						<CommentBlock>{commentData.body}</CommentBlock>
						<CommentFooter>
							<CommentImage>{commentData.image}</CommentImage>
							<CommentUsername>{commentData.author.username}</CommentUsername>
							<CommentCreatedAt>{commentData.createdAt}</CommentCreatedAt>
							{currentUserData.username === commentData.author.username && (
								<DeleteComment
									onClick={() =>
										removeCommentFromArticleRequest(commentData, articleSlug, commentData.id)}
								/>
							)}
						</CommentFooter>
					</CommentContent>
				))}
		</CommentContainer>
	);
}
const mapStateToProps = (state) => ({
	currentUserData: state.currentUser.currentUserData
});

const mapDispatchToProps = (dispatch) => ({
	addCommentToArticleRequest: (commentObj, slug) => dispatch(addCommentToArticleRequest(commentObj, slug)),
	removeCommentFromArticleRequest: (commentData, slug, commentId) =>
	dispatch(removeCommentFromArticleRequest(commentData, slug, commentId)),
	fetchCommentsFromArticleRequest: (slug) => dispatch(fetchCommentsFromArticleRequest(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
