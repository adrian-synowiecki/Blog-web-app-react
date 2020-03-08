import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { useParams, useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { fetchArticleRequested } from '../../redux/actions/singleArticle';

import ArticleForm from '../../components/ArticleForm/ArticleForm';

function EditArticle({ match, fetchArticleRequested, selectedArticle }) {
	useEffect(
		() => {
			fetchArticleRequested(match.params.articleSlug);
		},
		[ fetchArticleRequested, match.params.articleSlug ]
	);
	console.log(match.params.articleSlug);
	return <div>{!isEmpty(selectedArticle) && <ArticleForm selectedArticle={selectedArticle} />}</div>;
}

const mapStateToProps = (state, ownProps) => {
	return {
		selectedArticle: state.singleArticle.articleContent
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchArticleRequested: (slug) => dispatch(fetchArticleRequested(slug))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);
