import React from 'react';

import { useParams } from 'react-router-dom';
import { Formik } from 'formik';

import { CommentContainer, StyledForm, StyledField, StyledButton } from './CommentForm.style';

function CommentForm({ addCommentToArticleRequest }) {
	const { articleSlug } = useParams();
	return (
		<CommentContainer>
			<Formik
				initialValues={{
					commentText: ''
				}}
				onSubmit={(values) => {
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

export default CommentForm;
