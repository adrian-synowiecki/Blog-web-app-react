import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { fetchArticleRequest, updateArticleRequest, unloadArticle } from 'redux/article/article.actions';

import ArticleForm from 'components/ArticleForm/ArticleForm';

function EditArticlePage({ error, articleToEdit, fetchArticleRequest, updateArticleRequest, unloadArticle }) {
	const { articleSlug } = useParams();

	useEffect(() => {
		fetchArticleRequest(articleSlug);
		return () => {
			unloadArticle();
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div>
			{!isEmpty(articleToEdit) && (
				<ArticleForm articleToEdit={articleToEdit} error={error} updateArticleRequest={updateArticleRequest} />
			)}
		</div>
	);
}

const mapStateToProps = (state) => ({
	articleToEdit: state.article.articleData,
	error: state.article.error
});

const mapDispatchToProps = (dispatch) => ({
	updateArticleRequest: (articleSlug, articleToUpdateData) =>
		dispatch(updateArticleRequest(articleSlug, articleToUpdateData)),
	fetchArticleRequest: (articleSlug) => dispatch(fetchArticleRequest(articleSlug)),
	unloadArticle: () => dispatch(unloadArticle())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditArticlePage);
