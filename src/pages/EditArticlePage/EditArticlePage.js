import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { fetchArticleRequest, updateArticleRequest, unloadArticle } from 'redux/article/article.actions';

import ArticleForm from 'components/ArticleForm/ArticleForm';
import NotFound from 'components/NotFound/NotFound';

function EditArticlePage({ error, articleToEdit, fetchArticleRequest, updateArticleRequest, unloadArticle }) {
	const { articleSlug } = useParams();

	useEffect(() => {
		fetchArticleRequest(articleSlug);
		return () => {
			unloadArticle();
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Fragment>
			{error && <NotFound>404 Article Could Not Be Found</NotFound>}
			{!isEmpty(articleToEdit) && (
				<ArticleForm articleToEdit={articleToEdit} error={error} updateArticleRequest={updateArticleRequest} />
			)}
		</Fragment>
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
