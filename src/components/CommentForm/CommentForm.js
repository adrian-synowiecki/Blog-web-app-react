import React from 'react';
import { useParams } from 'react-router-dom';
import { Formik } from 'formik';

import * as S from './CommentForm.style';

function CommentForm({ addCommentToArticleRequest, className }) {
	const { articleSlug } = useParams();
	return (
		<Formik
			initialValues={{
				commentText: ''
			}}
			onSubmit={(values, actions) => {
				const commentData = {
					comment: {
						body: values.commentText
					}
				};
				addCommentToArticleRequest(commentData, articleSlug);
				actions.resetForm();
			}}
		>
			{({ isSubmitting }) => (
				<S.CommentForm className={className}>
					<S.CommentFormField
						name="commentText"
						component="textarea"
						placeholder="Write a comment..."
						rows="3"
					/>
					<S.CommentFormButton disabled={isSubmitting} type="submit">
						Post comment
					</S.CommentFormButton>
				</S.CommentForm>
			)}
		</Formik>
	);
}

export default CommentForm;
