import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { fetchArticleRequest, updateArticleRequest, unloadArticle } from 'redux/article/article.actions';

import ArticleForm from 'components/ArticleForm/ArticleForm';
import NotFound from 'components/NotFound/NotFound';

function EditArticlePage({ error, articleToEdit, username, fetchArticleRequest, updateArticleRequest, unloadArticle }) {
	const { articleSlug } = useParams();

	useEffect(() => {
		fetchArticleRequest(articleSlug);
		return () => {
			unloadArticle();
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	if (!isEmpty(articleToEdit)) {

	}

	return (
		<Fragment>
			{error && <NotFound>404 Article Not Found</NotFound>}
			{!isEmpty(articleToEdit) &&
			articleToEdit.author.username === username && (
				<ArticleForm articleToEdit={articleToEdit} error={error} updateArticleRequest={updateArticleRequest} />
			)}
			{!isEmpty(articleToEdit) &&
			articleToEdit.author.username !== username && (
				<NotFound>You Have No Permission To Edit This Article</NotFound>
			)}
		</Fragment>
	);
}

const mapStateToProps = (state) => ({
	articleToEdit: state.article.articleData,
	error: state.article.error,
	username: state.user.currentUserData.username
});

const mapDispatchToProps = (dispatch) => ({
	updateArticleRequest: (articleSlug, articleToUpdateData) =>
		dispatch(updateArticleRequest(articleSlug, articleToUpdateData)),
	fetchArticleRequest: (articleSlug) => dispatch(fetchArticleRequest(articleSlug)),
	unloadArticle: () => dispatch(unloadArticle())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditArticlePage);
