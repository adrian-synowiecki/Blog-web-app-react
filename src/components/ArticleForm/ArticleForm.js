import React, { useEffect, useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import TagsInput from 'react-tagsinput';

import * as S from './ArticleForm.style';
import './react-tags-input.css';

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
			<S.Title>{articleToEdit ? 'Edit Article' : 'Create New Article'}</S.Title>
			<Formik
				ref={formikRef}
				initialValues={
					articleToEdit ? (
						{
							title: `${title}`,
							description: `${description}`,
							body: `${body}`,
							tagList: articleToEdit.tagList
						}
					) : (
						{
							title: '',
							description: '',
							body: '',
							tagList: []
						}
					)
				}
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
					<Form style={{ width: '100%' }}>
						{error && <ErrorList error={error} />}
						<Field
							name="title"
							component={S.TextField}
							label="Article Title"
							margin="normal"
							variant="outlined"
						/>
						<Field
							name="description"
							component={S.TextField}
							label="What's this Article about?"
							margin="normal"
							variant="outlined"
						/>

						<Field
							name="body"
							component={S.TextField}
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
						<S.CreateAndEditArticleButton disabled={isSubmitting} type="submit">
							Publish Article
						</S.CreateAndEditArticleButton>
					</Form>
				)}
			</Formik>
		</S.ArticleFormContainer>
	);
}

export default ArticleForm;
