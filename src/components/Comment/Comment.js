import React, { useEffect } from 'react';
import { Formik, Field } from 'formik';
import { connect } from 'react-redux';

import {
	fetchCommentsFromArticleRequest,
	addCommentToArticleRequest,
	removeCommentFromArticleRequest
} from '../../redux/comments/comments.actions';

import {
	CommentContainer,
	StyledForm,
	StyledField,
	StyledButton,
	CommentContent,
	CommentBlock,
	CommentFooter,
	CommentImage,
	CommentUsername,
	CommentCreatedAt,
	DeleteComment
} from './Comment.style';

function Comment({
	selectedArticle,
	currentUserData,
	commentsList,
	fetchCommentsFromArticleRequest,
	addCommentToArticleRequest,
	removeCommentFromArticleRequest
}) {
	/* 	useEffect(() => {
		fetchCommentsFromArticles(selectedArticle.slug);
	}, []); */
	return (
		<CommentContainer>
			<Formik
				initialValues={{
					commentText: ''
				}}
				onSubmit={(values) => {
					// same shape as initial values
					const commentObj = {
						comment: {
							body: values.commentText
						}
					};
					addCommentToArticleRequest(commentObj, selectedArticle.slug);
				}}
			>
				{({ errors, touched }) => (
					<StyledForm>
						<StyledField name="commentText" component="textarea" placeholder="Write a comment" rows="4" />
						<StyledButton type="submit">Post comment</StyledButton>
					</StyledForm>
				)}
			</Formik>
			{commentsList &&
				commentsList.map((comment) => (
					<CommentContent key={comment.id}>
						<CommentBlock>{comment.body}</CommentBlock>
						<CommentFooter>
							<CommentImage>{comment.image}</CommentImage>
							<CommentUsername>{comment.author.username}</CommentUsername>
							<CommentCreatedAt>{comment.createdAt}</CommentCreatedAt>
							{currentUserData.username === comment.author.username && (
								<DeleteComment
									onClick={() => removeCommentFromArticleRequest(selectedArticle.slug, comment.id)}
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
	removeCommentFromArticleRequest: (slug, commentId) =>
	dispatch(removeCommentFromArticleRequest(slug, commentId)),
	fetchCommentsFromArticleRequest: (slug) => dispatch(fetchCommentsFromArticleRequest(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
