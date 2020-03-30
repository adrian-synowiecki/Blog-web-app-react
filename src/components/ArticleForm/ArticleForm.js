import React, { useEffect, useRef } from 'react';
import { Formik, Field } from 'formik';
import TagsInput from 'react-tagsinput';

import * as S from './ArticleForm.style';
import 'utils/react-tags-input.css';

import ErrorList from 'components/ErrorList/ErrorList';

function ArticleForm({ articleToEdit, error, createArticleRequest, updateArticleRequest }) {
	const { title, description, body, slug } = articleToEdit || {};

	const formikRef = useRef(null);
	useEffect(
		() => {
			formikRef.current.setSubmitting(false);
		},
		[ error ]
	);

	return (
		<S.ArticleFormContainer>
			<Formik
				ref={formikRef}
				initialValues={{
					title: articleToEdit ? `${title}` : '',
					description: articleToEdit ? `${description}` : '',
					body: articleToEdit ? `${body}` : '',
					tagList: []
				}}
				onSubmit={(values) => {
					const articleData = {
						article: {
							title: values.title,
							description: values.description,
							body: values.body,
							tagList: values.tagList
						}
					};
					articleToEdit ? updateArticleRequest(slug, articleData) : createArticleRequest(articleData);
				}}
			>
				{({ isSubmitting, values, setFieldValue }) => (
					<S.FormExtended>
						{error && <ErrorList error={error} />}
						<Field
							name="title"
							component={S.TextFieldExtended}
							label="Article Title"
							margin="normal"
							variant="outlined"
						/>

						<Field
							name="description"
							component={S.TextFieldExtended}
							label="What's this Article about?"
							margin="dense"
							variant="outlined"
						/>

						<Field
							body
							name="body"
							component={S.TextFieldExtended}
							label="Wrtice your Article (in markdown)"
							multiline
							rows="10"
							margin="normal"
							variant="outlined"
						/>
						<TagsInput
							value={values.tagList}
							onChange={(tagList) => {
								setFieldValue('tagList', tagList);
							}}
						/>
						<S.ButtonExtended disabled={isSubmitting} type="submit">
							Publish Article
						</S.ButtonExtended>
					</S.FormExtended>
				)}
			</Formik>
		</S.ArticleFormContainer>
	);
}

export default ArticleForm;
