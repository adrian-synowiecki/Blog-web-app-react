import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import { createArticleRequest, clearArticleError } from 'redux/article/article.actions';

import ArticleForm from 'components/ArticleForm/ArticleForm';

function ArticleCreationPage({ error, createArticleRequest, clearArticleError }) {
	useEffect(() => {
		return () => {
			clearArticleError();
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	window.onload = () => {
		clearArticleError();
	};
	return (
		<Fragment>
			<ArticleForm error={error} createArticleRequest={createArticleRequest} />
		</Fragment>
	);
}

const mapDispatchToProps = (dispatch) => ({
	createArticleRequest: (articleCreationData) => dispatch(createArticleRequest(articleCreationData)),
	clearArticleError: () => dispatch(clearArticleError())
});

const mapStateToProps = (state) => ({
	error: state.article.error
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCreationPage);
