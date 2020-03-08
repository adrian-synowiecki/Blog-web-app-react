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
	fetchCommentsFromArticleRequested,
	addCommentToArticleRequested,
	removeCommentFromArticleRequested
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
					addCommentToArticleRequested(commentObj, selectedArticle.slug);
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
	currentUserData: state.currentUser.currentUserData
});

const mapDispatchToProps = (dispatch) => ({
	addCommentToArticleRequested: (commentObj, slug) => dispatch(addCommentToArticleRequested(commentObj, slug)),
	removeCommentFromArticleRequested: (slug, commentId) =>
	dispatch(removeCommentFromArticleRequested(slug, commentId)),
	fetchCommentsFromArticleRequested: (slug) => dispatch(fetchCommentsFromArticleRequested(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
