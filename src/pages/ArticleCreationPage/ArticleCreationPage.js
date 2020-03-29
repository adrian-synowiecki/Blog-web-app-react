import React, { useEffect } from 'react';
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
		<div>
			<ArticleForm error={error} createArticleRequest={createArticleRequest} />
		</div>
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
