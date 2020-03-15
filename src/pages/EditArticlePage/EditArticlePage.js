import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { useParams, useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { fetchArticleRequest } from '../../redux/article/article.actions';

import ArticleForm from '../../components/ArticleForm/ArticleForm';

function EditArticlePage({ match, fetchArticleRequest, selectedArticle }) {
	useEffect(
		() => {
			fetchArticleRequest(match.params.articleSlug);
		},
		[ fetchArticleRequest, match.params.articleSlug ]
	);
	console.log(match.params.articleSlug);
	return <div>{!isEmpty(selectedArticle) && <ArticleForm selectedArticle={selectedArticle} />}</div>;
}

const mapStateToProps = (state, ownProps) => {
	return {
		selectedArticle: state.article.articleContent
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchArticleRequest: (slug) => dispatch(fetchArticleRequest(slug))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditArticlePage);
