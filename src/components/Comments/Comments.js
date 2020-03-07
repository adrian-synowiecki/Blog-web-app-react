import React, { useEffect } from 'react';
import { Formik, Field } from 'formik';
import { connect } from 'react-redux';

import {
	fetchCommentsFromArticleRequested,
	addCommentToArticleRequested,
	removeCommentFromArticleRequested
} from '../../redux/actions/comments';

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
	selectedArticle,
	userDetails,
	commentsList,
	fetchCommentsFromArticleRequested,
	addCommentToArticleRequested,
	removeCommentFromArticleRequested
}) {
	/* 	useEffect(() => {
		fetchCommentsFromArticles(selectedArticle.slug);
	}, []); */
	return (
		<CommentContainer>
			{commentsList &&
				commentsList.map((comment) => (
					<CommentContent key={comment.id}>
						<CommentBlock>{comment.body}</CommentBlock>
						<CommentFooter>
							<CommentImage>{comment.image}</CommentImage>
							<CommentUsername>{comment.author.username}</CommentUsername>
							<CommentCreatedAt>{comment.createdAt}</CommentCreatedAt>
							{userDetails.username === comment.author.username && (
								<DeleteComment
									onClick={() => removeCommentFromArticleRequested(selectedArticle.slug, comment.id)}
								/>
							)}
						</CommentFooter>
					</CommentContent>
				))}
		</CommentContainer>
	);
}
const mapStateToProps = (state) => ({
	userDetails: state.user.userDetails
});

const mapDispatchToProps = (dispatch) => ({
	addCommentToArticleRequested: (commentObj, slug) => dispatch(addCommentToArticleRequested(commentObj, slug)),
	removeCommentFromArticleRequested: (slug, commentId) =>
	dispatch(removeCommentFromArticleRequested(slug, commentId)),
	fetchCommentsFromArticleRequested: (slug) => dispatch(fetchCommentsFromArticleRequested(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
