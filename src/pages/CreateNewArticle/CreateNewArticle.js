/* import React from 'react';

import { Formik, Field } from 'formik';

import { withRouter } from 'react-router-dom';

import { createArticle } from '../../redux/modules/singleArticle';

import { CreateNewPostContainer, StyledForm, StyledTextField, StyledButton } from './CreateNewPost.style';

import { connect } from 'react-redux';

function CreateNewPost({ createArticle, history }) {
	return (
		<CreateNewPostContainer>
			<Formik
				initialValues={{
					title: '',
					description: '',
					body: '',
					tagList: ''
				}}
				onSubmit={(values) => {
					// same shape as initial values
					const articleDataObj = {
						article: {
							title: values.title,
							description: values.description,
							body: values.body,
							tagList: values.tagList
						}
					};
					createArticle(articleDataObj);
					history.push('/');
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
							label="What's this article about?"
							margin="dense"
							variant="outlined"
						/>

						<Field
							name="body"
							component={StyledTextField}
							label="Wrtice your article (in markdown)"
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
						<StyledButton type="submit">Publish article</StyledButton>
					</StyledForm>
				)}
			</Formik>
		</CreateNewPostContainer>
	);
}

const mapDispatchToProps = (dispatch) => ({
	createArticle: (articleDataObj) => dispatch(createArticle(articleDataObj))
});

export default withRouter(connect(null, mapDispatchToProps)(CreateNewPost));
 */

 import React from 'react'
 
 import ArticleForm from '../../components/ArticleForm/ArticleForm'

 function CreateNewArticle() {
	 return (
		 <div>
			 <ArticleForm />
		 </div>
	 )
 }
 
 export default CreateNewArticle
 