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
				<S.Form className={className}>
					<S.Field name="commentText" component="textarea" placeholder="Write a comment..." rows="3" />
					<S.CreateCommentButton disabled={isSubmitting} type="submit">
						Post comment
					</S.CreateCommentButton>
				</S.Form>
			)}
		</Formik>
	);
}

export default CommentForm;
