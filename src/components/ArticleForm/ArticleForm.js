import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import { withRouter } from 'react-router-dom';

import { createArticleRequest, updateArticleRequest } from '../../redux/actions/article'
import { ArticleFormContainer, StyledForm, StyledTextField, StyledButton } from './ArticleForm.style';

function ArticleForm({ createArticleRequest, selectedArticle, updateArticleRequest, history }) {
	return (
		<ArticleFormContainer>
			<Formik
				initialValues={{
					title: selectedArticle ? `${selectedArticle.title}` : '',
					description: selectedArticle ? `${selectedArticle.description}` : '',
					body: selectedArticle ? `${selectedArticle.body}` : '',
					tagList: ''
				}}
				onSubmit={(values, actions) => {
					
					// same shape as initial values
					const ArticleDataObj = {
						Article: {
							title: values.title,
							description: values.description,
							body: values.body,
							tagList: values.tagList
						}
					};
					selectedArticle
						? updateArticleRequest(selectedArticle.slug, ArticleDataObj)
						: createArticleRequest(ArticleDataObj);
				/* 	history.push('/'); */
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

const mapDispatchToProps = (dispatch) => ({
	createArticleRequest: (ArticleDataObj) => dispatch(createArticleRequest(ArticleDataObj)),
	updateArticleRequest: (slug, ArticleDataObj) => dispatch(updateArticleRequest(slug, ArticleDataObj))
});

export default withRouter(connect(null, mapDispatchToProps)(ArticleForm));
