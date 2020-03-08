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
} from './CommentForm.style';

function CommentForm({
	selectedArticle,
	currentUserData,
	commentsList,
	fetchCommentsFromArticleRequested,
	addCommentToArticleRequested,
	removeCommentFromArticleRequested
}) {

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

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
