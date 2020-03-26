import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { fetchArticleRequest } from '../../redux/article/article.actions';

import ArticleForm from '../../components/ArticleForm/ArticleForm';

function EditArticlePage({ fetchArticleRequest, articleToEdit }) {
	const { articleSlug } = useParams();

	useEffect(() => {
		fetchArticleRequest(articleSlug);
	}, []);

	return <div>{!isEmpty(articleToEdit) && <ArticleForm articleToEdit={articleToEdit} />}</div>;
}

const mapStateToProps = (state) => {
	return {
		articleToEdit: state.article.articleContent
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchArticleRequest: (articleSlug) => dispatch(fetchArticleRequest(articleSlug))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditArticlePage);
