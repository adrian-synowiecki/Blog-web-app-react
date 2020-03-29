import React, { useEffect, useRef } from 'react';
import { Formik, Field } from 'formik';
import TagsInput from 'react-tagsinput';

import 'utils/react-tags-input.css';
import { ArticleFormContainer, StyledForm, StyledTextField, StyledButton } from './ArticleForm.style';

import ErrorList from 'components/ErrorList/ErrorList';

function ArticleForm({ articleToEdit, error, createArticleRequest, updateArticleRequest }) {
	const { title, description, body, slug } = articleToEdit || {}
	

	const formikRef = useRef(null);
	useEffect(
		() => {
			formikRef.current.setSubmitting(false);
		},
		[ error ]
	);

	return (
		<ArticleFormContainer>
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
					<StyledForm>
						{error && <ErrorList error={error} />}
						<Field
							name="title"
							component={StyledTextField}
							label="Article Title"
							margin="normal"
							variant="outlined"
						/>

						<Field
							name="description"
							component={StyledTextField}
							label="What's this Article about?"
							margin="dense"
							variant="outlined"
						/>

						<Field
							body
							name="body"
							component={StyledTextField}
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
						<StyledButton disabled={isSubmitting} type="submit">
							Publish Article
						</StyledButton>
					</StyledForm>
				)}
			</Formik>
		</ArticleFormContainer>
	);
}

export default ArticleForm;
