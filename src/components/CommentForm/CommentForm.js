import React from 'react';
import { useParams } from 'react-router-dom';
import { Formik } from 'formik';

import * as S from './CommentForm.style'

function CommentForm({ addCommentToArticleRequest }) {
	const { articleSlug } = useParams();
	return (
		<S.CommentContainer>
			<Formik
				initialValues={{
					commentText: ''
				}}
				onSubmit={(values) => {
					const commentData = {
						comment: {
							body: values.commentText
						}
					};
					addCommentToArticleRequest(commentData, articleSlug);
				}}
			>
				{() => (
					<S.FormExtended>
						<S.FieldExtended name="commentText" component="textarea" placeholder="Write a comment" rows="4" />
						<S.ButtonExtended type="submit">Post comment</S.ButtonExtended>
					</S.FormExtended>
				)}
			</Formik>
		</S.CommentContainer>
	);
}

export default CommentForm;
