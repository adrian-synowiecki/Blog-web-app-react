import React from 'react';
import { connect } from 'react-redux';

import { createArticleRequest, updateArticleRequest } from '../../redux/article/article.actions';

import ArticleForm from '../../components/ArticleForm/ArticleForm';

function ArticleCreationPage({ createArticleRequest, updateArticleRequest }) {
	return (
		<div>
			<ArticleForm createArticleRequest={createArticleRequest} updateArticleRequest={updateArticleRequest} />
		</div>
	);
}

const mapDispatchToProps = (dispatch) => ({
	createArticleRequest: (ArticleDataObj) => dispatch(createArticleRequest(ArticleDataObj)),
	updateArticleRequest: (slug, ArticleDataObj) => dispatch(updateArticleRequest(slug, ArticleDataObj))
});

export default connect(mapDispatchToProps)(ArticleCreationPage);
