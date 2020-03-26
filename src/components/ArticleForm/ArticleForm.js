import React from 'react';
import { Formik, Field } from 'formik';

import { ArticleFormContainer, StyledForm, StyledTextField, StyledButton } from './ArticleForm.style';

function ArticleForm({ createArticleRequest, articleToEdit, updateArticleRequest, history }) {
	return (
		<ArticleFormContainer>
			<Formik
				initialValues={{
					title: articleToEdit ? `${articleToEdit.title}` : '',
					description: articleToEdit ? `${articleToEdit.description}` : '',
					body: articleToEdit ? `${articleToEdit.body}` : '',
					tagList: ''
				}}
				onSubmit={(values, actions) => {
					const ArticleDataObj = {
						Article: {
							title: values.title,
							description: values.description,
							body: values.body,
							tagList: values.tagList
						}
					};
					articleToEdit
						? updateArticleRequest(articleToEdit.slug, ArticleDataObj)
						: createArticleRequest(ArticleDataObj);
				}}
			>
				{({ errors, touched }) => (
					<StyledForm>
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
							name="body"
							component={StyledTextField}
							label="Wrtice your Article (in markdown)"
							multiline
							rows="10"
							margin="normal"
							variant="outlined"
						/>

						<Field
							name="tagList"
							component={StyledTextField}
							label="Enter tags"
							margin="dense"
							variant="outlined"
						/>
						<StyledButton type="submit">Publish Article</StyledButton>
					</StyledForm>
				)}
			</Formik>
		</ArticleFormContainer>
	);
}

export default ArticleForm;
