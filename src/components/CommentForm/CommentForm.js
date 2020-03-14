import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Formik, Field } from 'formik';


import {
	fetchCommentsFromArticleRequest,
	addCommentToArticleRequest,
	removeCommentFromArticleRequest
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
	fetchCommentsFromArticleRequest,
	addCommentToArticleRequest,
	removeCommentFromArticleRequest
}) {
	const { articleSlug } = useParams();
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
					addCommentToArticleRequest(commentObj, articleSlug);
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
	addCommentToArticleRequest: (commentObj, slug) => dispatch(addCommentToArticleRequest(commentObj, slug)),
	removeCommentFromArticleRequest: (slug, commentId) =>
	dispatch(removeCommentFromArticleRequest(slug, commentId)),
	fetchCommentsFromArticleRequest: (slug) => dispatch(fetchCommentsFromArticleRequest(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
